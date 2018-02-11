import { ICheckBox, ICheckBoxProps } from "./types"
import { fabric } from ".";

/**
 * CheckBox
 */
export const CheckBox = (props: ICheckBoxProps): ICheckBox => {
    let _cb = null;

    // Method to get the checkbox element
    let get = (): HTMLInputElement => {
        // Returns the checkbox element
        return props.el.querySelector(".ms-CheckBox") as HTMLInputElement;
    }

    // Method to get the value
    let getValue = (): boolean => {
        // Get the checkbox value
        return _cb ? _cb.getValue() : false;
    }

    // Add the checkbox html
    props.el.innerHTML = [
        '<div class="ms-CheckBox ' + (props.className || "") + '">',
        '<input tabindex="-1" type="checkbox" class="ms-CheckBox-input">',
        '<label role="checkbox" class="ms-CheckBox-field" tabindex="0" aria-checked="" name="checkbox' + props.label + '">',
        '<span class="ms-Label">' + props.label + '</span>',
        '</label>',
        '</div>'
    ].join('\n');

    // Get the checkbox
    let cb = get();

    // See if the checkbox is disabled
    if (props.disable) {
        // Disable the checkbox
        cb.disabled = true;
    }

    // Set the checkbox change event
    cb.onchange = () => {
        // Execute the change event
        props.onChange ? props.onChange(_cb.getValue()) : null;
    }

    // Create the checkbox
    _cb = new fabric.CheckBox(cb);

    // Update the value
    props.value ? _cb.check() : _cb.uncheck();

    // Return the checkbox
    return {
        get,
        getValue
    };
}
