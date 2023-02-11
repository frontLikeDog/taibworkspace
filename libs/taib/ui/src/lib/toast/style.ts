import { classnames, TArg } from "tailwindcss-classnames";
import { baseColor, SetColorWithBgAndText } from "../utils/colors";


// 外部div样式
const _outBase = classnames("shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" as TArg);

const bugVal = classnames("bg-primary text-white" as TArg);

export const outDivCls = (color:baseColor) => {
    const colorBgAndText = SetColorWithBgAndText(color) ?? bugVal;
    return classnames(_outBase, colorBgAndText);
}

export const colorBgAndText = (color:baseColor) => {
    const colorBgAndText = SetColorWithBgAndText(color) ?? bugVal;
    return classnames(colorBgAndText)
}

// 使用设计模式优化outDiv和colorBgAndText