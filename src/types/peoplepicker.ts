import { Types } from "gd-sprest"
import { Fabric, IProps, IComponentProps } from ".";

/**
 * People Picker
 */
export interface IPeoplePicker {
    /** Returns the fabric component. */
    get(): Fabric.IPeoplePicker;

    /** Returns the link value. */
    getValue(): Array<Types.SP.IPeoplePickerUser>;
}

/**
 * People Picker Properties
 */
export interface IPeoplePickerProps extends IProps {
    /** Flag to allow multiple personas. */
    allowMultiple?: boolean;

    /** Flag to allow groups. */
    allowGroups?: boolean;

    /** The people picker label. */
    label?: string;

    /** Required flag. */
    required?: boolean;

    /** The people picker value */
    value?: Array<Types.SP.ComplexTypes.FieldUserValue>;
}