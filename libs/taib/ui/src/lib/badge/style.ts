import {classnames, TArg} from "tailwindcss-classnames"
import { baseColor, bgClorType, clsHelperFn, textColorType } from "../utils/colors"

const _base = classnames("text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded" as TArg)

// f返回bgColor和textColor的组合,是TW的class类
const TArgWithBgTextColor = (bgColor:bgClorType,textColor:textColorType) => {
    return classnames(`${bgColor} ${textColor}` as TArg)
}

interface bgAndTextProps {
    [key: string]: [bgClorType, textColorType];
}
// 定义badge的颜色
const _BgAndText:bgAndTextProps = {
    primaryArry : ["bg-primary", "text-white"],
    linkArry : ["bg-link", "text-white"],
    infoArry : ["bg-info", "text-white"],
    successArry : ["bg-success", "text-white"],
    warningArry : ["bg-warning", "text-white"],
    dangerArry : ["bg-danger", "text-white"],
    blackArry : ["bg-black", "text-white"],
    lightArry : ["bg-light", "text-gray"],
    darkArry : ["bg-dark", "text-white"],
    whiteArry : ["bg-white", "text-gray"],
    grayArry : ["bg-gray", "text-white"],
};

interface withBgTextColorProps {
    [key: string]: TArg;
}
// 创建一个函数，遍历_BgAndText，解构出数组，传入_withBgTextColor函数，返回TW的class类
const withBgTextColorFn = (bgAndText:bgAndTextProps) => {
    const res:withBgTextColorProps = {};
    Object.keys(bgAndText).forEach((key) => {
        const [bgColor, textColor] = bgAndText[key];
        res[key] = TArgWithBgTextColor(bgColor, textColor)
    })
    return res;
}

// 导出一个函数，返回TW的class类
export const badgeClsFn = (color:baseColor) => {
    const COLOR = clsHelperFn(withBgTextColorFn(_BgAndText), `${color}Arry`);
    // console.log("----???-----",COLOR);
    return classnames({
        [_base]: true,
        [String(COLOR)]: true,
    })
}