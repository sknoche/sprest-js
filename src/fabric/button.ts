import { IButtonProps } from "./types"
import { fabric, Templates } from ".";

/**
 * Button
 */
export const Button = (props: IButtonProps): HTMLButtonElement => {
    // Add the button html
    props.el.innerHTML = Templates.Button(props);

    // Get the button
    let btn = props.el.firstElementChild as HTMLButtonElement;

    // See if the button is disabled
    if (props.disable) {
        // Disable the button
        btn.disabled = true;
    }

    // Set the button click event
    btn.onclick = () => {
        // Execute the click event
        props.onClick ? props.onClick() : null;

        // Disable postback
        return false;
    }

    // Create the button
    let _btn = new fabric.Button(btn);

    // Return the button
    return btn;
}