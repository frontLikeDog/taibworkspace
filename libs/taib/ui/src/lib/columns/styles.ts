// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


import type { TArg } from "tailwindcss-classnames"
import classnames from "tailwindcss-classnames"
import { ColPorps } from "./columns"


type TypeProps = Pick<ColPorps, "gaps">

const Base = classnames(
    "grid" as TArg,
    "md:grid-flow-col","grid-flow-row",
    "md:auto-cols-auto",
    "auto-rows-auto"
)

const Gap = (props: TypeProps) => {
    const { gaps } = props
    if (gaps) {
        return classnames(
            gaps
        )
    }
    return ""
}

export const taibStyles = ({gaps}:TypeProps) => {
    return classnames({
        [Base]:true,
        [Gap({gaps})]:true
    } as unknown as TArg )
}
