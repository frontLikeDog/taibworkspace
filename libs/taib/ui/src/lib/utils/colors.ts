import { TArg, classnames } from "tailwindcss-classnames";

//为色值建立枚举类型，值为tailwindcss-config中的颜色值
export enum elmColorEnum {
    primary = 'primary',
    link = 'link',
    black = 'black',
    gray = 'gray',
    light = 'light',
    success = 'success',
    info = 'info',
    warning = 'warning',
    danger = 'danger',
    white = 'white',
    dark = 'dark',
}

// 定义颜色类型，如bg-primary, text-primary, border-primary
export type elmColorType = 'bg' | 'text' | 'border';

//可选择的限定色值范围，50，100，200，300，400，500，600，700，800，900，输出为bg-primary-50, bg-primary-100等
export type elmColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// 创建一个泛型，返回TW颜色值
export type colorHelper<T extends elmColorType> 
    = `${T}-${keyof typeof elmColorEnum}` | `${T}-${keyof typeof elmColorEnum}-${elmColorRange}`

export type bgClorType = colorHelper<'bg'>;

export type textColorType = colorHelper<'text'>;

export type borderColorType = colorHelper<'border'>;

export type colorType = bgClorType | textColorType | borderColorType;
export type baseColor = keyof typeof elmColorEnum;

//测试传入bg,是否能生成bg-primary, bg-link等
// export const testFn:borderColorType = "borb00"

interface anyClsObj {
    [key: string]: TArg | string;
}

interface bgAndTextProps {
    [key: string]: [bgClorType, textColorType];
}

// f返回bgColor和textColor的组合,是TW的class类
const TArgWithBgTextColor = (bgColor:bgClorType,textColor:textColorType) => {
    return classnames(`${bgColor} ${textColor}` as TArg)
}

// 设置常用的背景色和文字颜色
const _BgAndText:bgAndTextProps = {
    primaryArry : ["bg-primary", "text-white"],
    linkArry : ["bg-link", "text-white"],
    infoArry : ["bg-info", "text-white"],
    successArry : ["bg-success", "text-white"],
    warningArry : ["bg-warning", "text-black"],
    dangerArry : ["bg-danger", "text-white"],
    blackArry : ["bg-black", "text-white"],
    lightArry : ["bg-light", "text-gray"],
    darkArry : ["bg-dark", "text-white"],
    whiteArry : ["bg-white", "text-gray"],
    grayArry : ["bg-gray", "text-white"],
};

interface IBgTextColorProps {
    [key: string]: TArg;
}

// 创建一个函数，遍历_BgAndText，解构出数组，传入_withBgTextColor函数，返回TW的class类
export const SetColorWithBgAndText = (color:baseColor) => {
    const res:IBgTextColorProps = {};
    Object.keys(_BgAndText).forEach((key) => {
        const [bgColor, textColor] = _BgAndText[key];
        res[key] = TArgWithBgTextColor(bgColor, textColor)
    })
    return clsHelperFn(res, `${color}Arry`);
}


/**
 * 辅助函数，输入一个对象和一个字符串，返回classnames样式
 * @param {T} obj
 * @param {K} str
 * @return {*}  {(TArg | undefined)}
 */
export const clsHelperFn = <T extends anyClsObj, K extends keyof T>(obj: T, str: K) : TArg | undefined => {
    let res;
    Object.keys(obj).forEach((key) => {
        if (key === str) {
            res = obj[key];
        }
    })
    return res;
}