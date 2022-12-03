import classnames , {TArg} from "tailwindcss-classnames";
import { ImageProps } from "./image";


type imgStyleProps = Pick<ImageProps, "type">

const circle = classnames(
    'rounded-full' as TArg,
);

const rounded = classnames(
    "rounded" as TArg,
);


export const imgStyle = ({...props}:imgStyleProps) => {
    const { type } = props;
    switch (type) {
        case "circle":
            return circle;
        case "rounded":
            return rounded;
        default:
            return "";
    }
}