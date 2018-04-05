/// <reference types="react" />
import './Button.css';
export interface Props {
    /** this dictates what the button will say  */
    label: string;
    /** this dictates what the button will do  */
    onClick: () => void;
    /**
     * Disables onclick
     *
     * @default false
     **/
    disabled?: boolean;
}
export declare const Button: (props: Props) => JSX.Element;
