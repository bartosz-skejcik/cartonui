import { MouseEventHandler } from "react";
export interface ButtonProps {
    text: string;
    color?: "green" | "blue" | "red" | "yellow";
    size?: "small" | "medium" | "large";
    isBorder?: boolean;
    isDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}