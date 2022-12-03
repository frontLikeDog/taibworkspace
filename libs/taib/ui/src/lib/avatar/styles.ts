// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import  classnames , {TArg} from 'tailwindcss-classnames';
import { AvatarProprs } from "./avatar";



type StyleProps = Pick<AvatarProprs, "variant" | "type" | "status">;

const basic = classnames(
    "relative",
    "w-9",
    "h-9",
    "flex",
    "items-center",
    "justify-center",
    "bg-gray-50",
    "m-0",
    "p-0",
    "ring","ring-primary"
);

const circle = classnames(
    basic,
    "rounded-full",
);

const rounded = classnames(
    basic,
    "rounded-md",
)

const square = classnames(
    basic,
    "rounded-none",
)

const statusBasic = classnames(
    "absolute",
    "ring-2", "ring-white",
    "bg-green-500",
    "w-3",
    "h-3",
    "rounded-full",
)


export const AvatarStyles = ({variant, type}:StyleProps) => {
    return classnames({
        [circle]: variant === "circle",
        [rounded]: variant === "rounded",
        [square]: variant === "square",
    } as unknown as TArg )
}

export const StatusStyles = ({variant}:any) => {
    return classnames({
        [statusBasic]: true
    } as unknown as TArg )
}

