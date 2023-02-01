import { classnames } from "tailwindcss-classnames";

const base = classnames("inline-flex", "items-center", "cursor-pointer",
    
);

const disableRadio = classnames("cursor-not-allowed", "opacity-50");

export const stylesRadio = ({disable}:any) => {
    return classnames(
        {
            [base]: true,
            [disableRadio]: disable
        }
    )
}