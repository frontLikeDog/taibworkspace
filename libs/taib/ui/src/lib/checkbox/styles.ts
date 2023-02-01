import { classnames } from "tailwindcss-classnames";

export interface stylesProps  {
    disabled?: boolean;
}

const base = classnames("inline-flex", "items-center", "cursor-pointer");
const disableCheckbox = classnames("cursor-not-allowed", "opacity-50");

export const stylesCheckbox = ({disabled}:stylesProps) => {
    return classnames(
        {
            [base]: true,
            [disableCheckbox]: disabled
        }
    )
}