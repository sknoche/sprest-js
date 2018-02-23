import { ContextInfo, Web, Types } from "gd-sprest";
import { IWPListCfg, IWPListInfo, IWPListProps } from "./types";
import { Fabric } from "..";
import { WebPart, WPCfg } from ".";

/**
 * List WebPart
 */
export const WPList = (props: IWPListProps) => {
    let _init = false;
    let _panel: Fabric.Types.IPanel = null;
    let _panelContents: HTMLElement = null;
    let _wpInfo: IWPListInfo = null;

    /**
     * Display Form
     */

    let _items: Array<Types.SP.IListItemQueryResult | Types.SP.IListItemResult> = null;

    // Method to render the display form
    let renderDisplayForm = (wpInfo: IWPListInfo) => {
        // Save the information
        _wpInfo = wpInfo;

        // Load the items
        loadItems();
    }

    // Method to load the items
    let loadItems = () => {
        // See if items exist
        if (_items && _items.length > 0) {
            // Call the render event
            props.onRenderItems ? props.onRenderItems(_items) : null;
            return;
        }

        // See if we are using the CAML query
        let cfg: IWPListCfg = _wpInfo.cfg || {};
        if (this._caml) { loadCAML(cfg.WebUrl, cfg.ListName, props.camlQuery); }
        // Else, load using the ODATA query
        else { loadODATA(cfg.WebUrl, cfg.ListName, props.odataQuery); }
    }

    // Method to load the items using a CAML query
    let loadCAML = (webUrl: string, listName: string, caml: string) => {
        // See if we are targeting a different web
        if (webUrl) {
            // Get the context information for the destination web
            // Note - Since we are using a POST request, this would be required for cross-site collection requests
            ContextInfo.getWeb(webUrl).execute((contextInfo) => {
                // Get the web
                (new Web(webUrl, { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue }))
                    // Get the list
                    .Lists(listName)
                    // Query the items
                    .getItemsByQuery(caml)
                    // Execute the request
                    .execute(items => {
                        // Render the items
                        props.onRenderItems ? props.onRenderItems(items.results) : null;
                    });
            });
        } else {
            // Get the web
            (new Web(webUrl))
                // Get the list
                .Lists(listName)
                // Query the items
                .getItemsByQuery(caml)
                // Execute the request
                .execute(items => {
                    // Render the items
                    props.onRenderItems ? props.onRenderItems(items.results) : null;
                });
        }
    }

    // Method to load the items using an ODATA query
    let loadODATA = (webUrl: string, listName: string, query: Types.SP.ODataQuery) => {
        // Get the web
        (new Web(webUrl))
            // Get the list
            .Lists(listName)
            // Get the items
            .Items()
            // Query the list
            .query(query)
            // Execute the request
            .execute((items) => {
                // Render the items
                props.onRenderItems ? props.onRenderItems(items.results) : null;
            });
    }

    /**
     * Edit Form
     */

    let _ddl: Fabric.Types.IDropdown = null;

    // Method to render the edit form
    let renderEditForm = (wpInfo: IWPListInfo) => {
        // Save the information
        _wpInfo = wpInfo;

        // Render the configuration panel
        _wpInfo.el.innerHTML = [
            '<div></div>',
            '<div></div>',
        ].join('\n');

        // Render the panel
        _panel = Fabric.Panel({
            el: _wpInfo.el.children[0],
            headerText: "Configuration Panel",
            showCloseButton: true
        });

        // Render the button
        let btn = Fabric.Button({
            el: _wpInfo.el.children[1],
            text: "Show Configuration",
            onClick: () => {
                // Show the panel
                _panel.show();

                // Render the configuration
                renderConfiguration();
            }
        });
    }

    // Method to load the lists
    let _lists: Array<Types.SP.IListResult> = null;
    let loadLists = (webUrl?: string) => {
        // Render a loading message
        Fabric.Spinner({
            el: _panelContents.children[1],
            text: "Loading the lists..."
        });

        // See if no data has been loaded
        if (_lists == null) {
            // Get the web
            (new Web(webUrl))
                // Get the lists
                .Lists()
                // Execute the request
                .execute(lists => {
                    // Save the lists
                    _lists = lists.results;

                    // Render the dropdown
                    renderDropdown();
                });
        } else {
            // Render the dropdown
            renderDropdown();
        }
    }

    // Method to render the configuration panel
    let renderConfiguration = () => {
        // Render the panel contents
        _panelContents = _panel.updateContent([
            '<div></div>',
            '<div></div>',
            '<div></div>',
            '<div></div>'
        ].join('\n'));

        // Render the web url textbox
        let tb = Fabric.TextField({
            el: _panelContents.children[0],
            label: "Relative Web Url:",
            description: "The web containing the list. If blank, the current web is used."
        });

        // See if we haven't initialized the form
        if (!_init && _wpInfo && _wpInfo.cfg) {
            // Initialized the textbox
            tb.setValue(_wpInfo.cfg.WebUrl || "");
        }

        // Render the refresh button
        Fabric.Button({
            el: _panelContents.children[2],
            text: "Refresh",
            onClick: () => {
                // Load the lists
                loadLists(tb.getValue());
            }
        });

        // Render the refresh button
        Fabric.Button({
            el: _panelContents.children[3],
            text: "Save",
            onClick: () => {
                let selectedList = _ddl.getValue() as Fabric.Types.IDropdownOption;

                // Save the configuration
                WPCfg.saveConfiguration(_wpInfo.wpId, props.cfgElementId, {
                    ListName: selectedList ? selectedList.text : "",
                    WebPartId: _wpInfo.wpId,
                    WebUrl: tb.getValue()
                } as IWPListCfg);
            }
        });

        // Load the lists
        loadLists(tb.getValue());
    }

    // Method to render the dropdown
    let renderDropdown = () => {
        let options: Array<Fabric.Types.IDropdownOption> = [];

        // Parse the lists
        for (let i = 0; i < _lists.length; i++) {
            // Add the option
            options.push({
                text: _lists[i].Title,
                value: _lists[i].Title
            });
        }

        // Render the dropdown
        _ddl = Fabric.Dropdown({
            el: _panelContents.children[1],
            options,
            value: !_init && _wpInfo.cfg ? _wpInfo.cfg.ListName : null
        });

        // Set the intialization flag
        _init = true;
    }

    /**
     * Main
     */

    // Return the webpart
    return WebPart({
        cfgElementId: props.cfgElementId,
        elementId: props.elementId,
        onRenderDisplay: renderDisplayForm,
        onRenderEdit: renderEditForm
    });
}