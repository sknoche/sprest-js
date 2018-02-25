import { SPTypes, Types, Web } from "gd-sprest";
import { Button, CommandBar, Panel, PanelTypes, Templates, Spinner } from "../fabric";
import { Fabric, IDropdown, IDropdownOption, IPanel } from "../fabric/types";
import { Field, ListForm } from ".";
import { IField, IListFormMMSFieldInfo, IListFormLookupFieldInfo, IListFormUserFieldInfo, IListFormPanel, IListFormPanelProps, IListFormResult } from "./types";

/**
 * Item Form
 */
export const ListFormPanel = (props: IListFormPanelProps): IListFormPanel => {
    /**
     * Display Form
     */

    // Render the display form
    let renderDisplayForm = () => {
        // Get the list
        _formInfo.list
            // Load the target item
            .Items(_formInfo.item.Id)
            // Get the html for the fields
            .FieldValuesAsHtml()
            // Execute the request
            .execute(formValues => {
                // Parse the fields
                for (let fieldName in _formInfo.fields) {
                    // Get the element
                    let el = _panel.get()._panel.querySelector("[data-field='" + fieldName + "']");
                    if (el) {
                        let field = _formInfo.fields[fieldName];
                        let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                        // Set the html for this field
                        el.innerHTML = [
                            '<div class="display-form">',
                            Templates.Label({
                                className: "field-label",
                                description: field.Description,
                                text: field.Title
                            }),
                            '<div class="field-value">' + html + '</div>',
                            '</div>'
                        ].join('\n');
                    }
                }
            });
    }

    /**
     * Edit Form
     */

    let _fields: Array<IField> = [];
    let _formInfo: IListFormResult = null;

    // Render the edit form
    let renderEditForm = (controlMode: number) => {
        // Clear the fields
        _fields = [];

        // Parse the fields
        for (let fieldName in _formInfo.fields) {
            let field = _formInfo.fields[fieldName];
            let value = _formInfo.item ? _formInfo.item[fieldName] : null;

            // See if this is a read-only field
            if (field.ReadOnlyField) {
                // Do not render in the new form
                if (controlMode == SPTypes.ControlMode.New) { continue; }
            }

            // See if this is the hidden taxonomy field
            if (field.Hidden && field.FieldTypeKind == SPTypes.FieldType.Note && field.Title.endsWith("_0")) {
                // Do not render this field
                continue;
            }

            // See if this is an invalid field type
            if (field.FieldTypeKind == SPTypes.FieldType.Invalid) {
                // Ensure it's not a taxonomy field
                if (!field.TypeAsString.startsWith("TaxonomyFieldType")) { continue; }
            }

            // Render the field
            Field({
                controlMode,
                el: _panel.get()._panel.querySelector("[data-field='" + fieldName + "']"),
                fieldInfo: {
                    field,
                    listName: _formInfo.list.Title,
                    name: fieldName,
                },
                value
            }).then(field => {
                // Add the field
                _fields.push(field);
            });
        }
    }

    /**
     * Render Form
     */

    // Render the form
    let renderForm = (controlMode: number = SPTypes.ControlMode.Display) => {
        // Parse the fields
        let fields = "";
        for (let fieldName in _formInfo.fields) {
            // Append the div for this field
            fields += "<div data-field='" + fieldName + "'></div>";
        }

        // Render the menu
        renderMenu(controlMode);

        // Update the panel content
        _panel.updateContent([
            '<div class="ms-ListForm">',
            '<label class="ms-Label ms-fontColor-redDark form-error error"></label>',
            fields,
            '</div>'
        ].join('\n'));

        // See if this is a new/edit form
        if (controlMode == SPTypes.ControlMode.Edit || controlMode == SPTypes.ControlMode.New) {
            // Render the edit form
            renderEditForm(controlMode);
        } else {
            // Render the display form
            renderDisplayForm();
        }

        // Add the menu click event
        addMenuClickEvents();
    }

    // Add the menu click events
    let addMenuClickEvents = () => {
        let buttons: any = null;

        // Cancel buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-cancel");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Render the form
                renderForm(SPTypes.ControlMode.Display);
            });
        }

        // Close buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-close");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Close the panel
                _panel.hide();
            });
        }

        // Set the edit button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-edit");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Render the form
                renderForm(SPTypes.ControlMode.Edit);
            });
        }

        // Set the save button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-save");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                let formValues = {};
                let unknownUsers = {};

                // Disable postback
                ev ? ev.preventDefault() : null;

                // Validate the form
                if (validate() == false) {
                    // Display an error message
                    let errorMessage = _panel.get()._panel.querySelector(".form-error");
                    if (errorMessage) {
                        // Set the error message
                        errorMessage.innerHTML = "The form contains errors.";
                    }

                    // Return
                    return;
                }

                // Render a saving message
                let content = _panel.updateContent(Templates.Spinner({ text: "Saving the item..." }));
                Spinner({
                    el: content,
                    text: "Saving the item..."
                });

                // Parse the fields
                for (let i = 0; i < _fields.length; i++) {
                    let field = _fields[i];
                    let fieldName = field.fieldInfo.name;
                    let fieldValue: any = field.element.getValue();

                    // Update the field name/value, based on the type
                    switch (field.fieldInfo.type) {
                        // Choice
                        case SPTypes.FieldType.Choice:
                            // Update the field value
                            fieldValue = fieldValue ? (fieldValue as IDropdownOption).value : fieldValue;
                            break;

                        // Lookup
                        case SPTypes.FieldType.Lookup:
                            // Append 'Id' to the field name
                            fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                            // See if this is a multi-value field
                            if ((field.fieldInfo as IListFormLookupFieldInfo).multi) {
                                let values: Array<IDropdownOption> = fieldValue || [];
                                fieldValue = { results: [] };

                                // Parse the options
                                for (let j = 0; j < values.length; j++) {
                                    // Add the value
                                    fieldValue.results.push(values[j].value);
                                }
                            } else {
                                // Update the field value
                                fieldValue = fieldValue ? (fieldValue as IDropdownOption).value : fieldValue;
                            }
                            break;

                        // Multi-Choice
                        case SPTypes.FieldType.MultiChoice:
                            let options: Array<IDropdownOption> = fieldValue || [];
                            fieldValue = { results: [] };

                            // Parse the options
                            for (let j = 0; j < options.length; j++) {
                                // Add the option
                                fieldValue.results.push(options[j].value);
                            }
                            break;

                        // URL
                        case SPTypes.FieldType.URL:
                            // See if the field value exists
                            if (fieldValue) {
                                // Add the metadata
                                fieldValue.__metadata = { type: "SP.FieldUrlValue" };
                            }
                            break;

                        // User
                        case SPTypes.FieldType.User:
                            // Append 'Id' to the field name
                            fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                            // See if this is a multi-value field
                            if ((field.fieldInfo as IListFormUserFieldInfo).multi) {
                                let values: Array<IDropdownOption> = fieldValue || [];
                                fieldValue = { results: [] };

                                // Parse the options
                                for (let j = 0; j < values.length; j++) {
                                    let userValue = values[j] as Types.SP.IPeoplePickerUser;
                                    if (userValue && userValue.EntityData) {
                                        // Ensure the user or group id exists
                                        if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                            // Update the field value
                                            fieldValue.results.push(userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID);
                                        } else {
                                            // Add the unknown user account
                                            unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                            unknownUsers[fieldName].push(userValue.Key);
                                        }
                                    }
                                }
                            } else {
                                let userValue: Types.SP.IPeoplePickerUser = fieldValue ? fieldValue[0] : null;
                                if (userValue && userValue.EntityData) {
                                    // Ensure the user or group id exists
                                    if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                        // Update the field value
                                        fieldValue = userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID;
                                    } else {
                                        // Add the unknown user account
                                        unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                        unknownUsers[fieldName].push(userValue.Key);
                                    }
                                } else {
                                    // Clear the field value
                                    fieldValue = null;
                                }
                            }
                            break;

                        // MMS
                        default:
                            if (field.fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                                // See if this is a multi field
                                if (field.fieldInfo.typeAsString.endsWith("Multi")) {
                                    // Update the field name to the value field
                                    fieldName = (field.fieldInfo as IListFormMMSFieldInfo).valueField.InternalName;

                                    // Parse the field values
                                    let fieldValues: Array<IDropdownOption> = fieldValue || [];
                                    fieldValue = [];
                                    for (let j = 0; j < fieldValues.length; j++) {
                                        let termInfo = fieldValues[j];

                                        // Add the field value
                                        fieldValue.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                                    }

                                    // Set the field value
                                    fieldValue = fieldValue.join(";#");
                                } else {
                                    // Update the value
                                    fieldValue = fieldValue ? {
                                        __metadata: { type: "SP.Taxonomy.TaxonomyFieldValue" },
                                        Label: fieldValue.text,
                                        TermGuid: fieldValue.value,
                                        WssId: -1
                                    } : fieldValue;
                                }
                            }
                            break;
                    }

                    // Set the field value
                    formValues[fieldName] = fieldValue;
                }

                // Ensure the user accounts exist
                ensureUserAccounts(unknownUsers, formValues).then(formValues => {
                    // Save the item
                    ListForm.saveItem(_formInfo, formValues).then(formInfo => {
                        // Update the form info
                        _formInfo = formInfo;

                        // Render the form
                        renderForm(SPTypes.ControlMode.Display);
                    });
                });
            });
        }
    }

    // Method to ensure the user accounts exist
    let ensureUserAccounts = (userAccounts, formValues) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let web = new Web();

            // Parse the field names
            for (let fieldName in userAccounts) {
                // Parse the user accounts
                for (let i = 0; i < userAccounts[fieldName].length; i++) {
                    // Ensure this user account exists
                    web.ensureUser(userAccounts[fieldName][i]).execute(true);
                }
            }

            // Wait for the requests to complete
            web.done((...args) => {
                // Parse the field names
                for (let fieldName in userAccounts) {
                    // Parse the user accounts
                    for (let i = 0; i < userAccounts[fieldName].length; i++) {
                        let userLogin = userAccounts[fieldName][i];

                        // Parse the responses
                        for (let j = 0; j < args.length; j++) {
                            let user = args[j] as Types.SP.IUserResult;

                            // See if this is the user
                            if (user.LoginName == userLogin) {
                                // See if this is a multi-user value
                                if (formValues[fieldName].results != null) {
                                    // Set the user account
                                    formValues[fieldName].push(user.Id);
                                } else {
                                    // Set the user account
                                    formValues[fieldName] = user.Id;
                                }
                            }
                        }
                    }
                }

                // Resolve the promise
                resolve(formValues);
            });
        });
    }

    // Render the menu
    let renderMenu = (controlMode: number) => {
        // Determine the main commands
        let mainCommands = null;
        switch (controlMode) {
            // Display
            case SPTypes.ControlMode.Display:
                mainCommands = [
                    {
                        className: "ms-CommandButton-edit",
                        icon: "Edit",
                        text: "Edit"
                    },
                    {
                        className: "ms-CommandButton-close",
                        icon: "Cancel",
                        text: "Close"
                    }
                ];
                break;

            // Edit
            case SPTypes.ControlMode.Edit:
                mainCommands = [
                    {
                        className: "ms-CommandButton-cancel",
                        icon: "Back",
                        text: "Cancel"
                    },
                    {
                        className: "ms-CommandButton-save",
                        icon: "Save",
                        text: "Update"
                    }
                ];
                break;

            // New
            case SPTypes.ControlMode.New:
                mainCommands = [
                    {
                        className: "ms-CommandButton-save",
                        icon: "Save",
                        text: "Save"
                    },
                    {
                        className: "ms-CommandButton-close",
                        icon: "Cancel",
                        text: "Close"
                    }
                ];
                break;
        }

        // Render the menu
        CommandBar({
            className: "ms-CommandBar--navBar",
            el: _panel.get()._panel.querySelector(".ms-Panel-header"),
            mainCommands,
            sideCommands: [
                {
                    className: "ms-CommandButton-close",
                    icon: "Cancel"
                }
            ]
        });
    }

    // Method to validate the form
    let validate = () => {
        // Get the fields
        let fields = _panel.get()._panel.querySelectorAll(".ms-ListForm > div");
        for (let i = 0; i < fields.length; i++) {
            // See if there is an error message
            let errorMessage = fields[i].querySelector(".ms-Label.error") as HTMLLabelElement;
            if (errorMessage && errorMessage.innerText) {
                // Form contains error
                return false;
            }
        }

        // Form is valid
        return true;
    }

    /**
     * Main
     */

    // Render the panel
    props.el.innerHTML = Templates.Panel({
        className: props.className,
        el: props.el,
        headerText: props.panelTitle,
        panelType: typeof (props.panelType) === "number" ? props.panelType : PanelTypes.Large,
        showCloseButton: false
    });

    // Create the panel
    let _panel = Panel(props);

    // Create an instance of the list form
    new ListForm({
        cacheKey: props.cacheKey,
        fields: props.fields,
        item: props.item,
        itemId: props.itemId,
        listName: props.listName,
        loadAttachments: props.loadAttachments,
        query: props.query,
        webUrl: props.webUrl
    }).then(formInfo => {
        // Save the form information
        _formInfo = formInfo;

        // See if the panel is open
        if (_panel.isOpen()) {
            // Render the panel
            renderForm(props.controlMode);
        }
    });

    // Return the panel
    return {
        show: (controlMode: number = SPTypes.ControlMode.Display) => {
            // See if the panel is open
            if (_panel.isOpen()) { return; }

            // See if the list info exists
            if (_formInfo) {
                // Show the form
                _panel.show();

                // Render the form
                renderForm(props.controlMode);
            } else {
                // Show the panel
                let content = _panel.show(_formInfo ? "" : "<div class='spinner'></div>");

                // Render a spinner
                Spinner({ el: content.querySelector(".spinner"), text: "Loading..." });
            }
        }
    }
}