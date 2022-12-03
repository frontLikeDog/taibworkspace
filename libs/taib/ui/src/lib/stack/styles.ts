// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import classnames, { TArg } from "tailwindcss-classnames";
import { StackProps } from "./stack";


type TypeProps = Pick<StackProps, "gaps" | "col" | "row" | "revcol" | "revrow">

const Base = classnames(
    "flex",
);


const Gap = (props: TypeProps) => {
    const { gaps } = props
    if (gaps) {
        return classnames(
            gaps
        )
    }
    return "gap-4"
}

const FlexDirection = (props: TypeProps) => {
    const { col, row, revcol, revrow } = props
    if (col) {
        return classnames(
            "flex-col"
        )
    }
    if (row) {
        return classnames(
            "flex-row"
        )
    }
    if (revcol) {
        return classnames(
            "flex-col-reverse"
        )
    }
    if (revrow) {
        return classnames(
            "flex-row-reverse"
        )
    }
    return "flex-col"
}

export const stackStyles = ({gaps,col,row,revcol,revrow}:TypeProps) => {
    return classnames({
        [Base]:true,
        [Gap({gaps})]:true,
        [FlexDirection({col,row,revcol,revrow})]:true
    } as unknown as TArg )
}