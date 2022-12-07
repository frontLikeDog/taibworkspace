import { classnames, TArg } from "tailwindcss-classnames";

const _SIZEOGJ = {
    sm: "px-2.5 py-1.5 text-xs",
    base: "px-3 py-2 text-sm leading-4",
    md: " px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
};

export type classOBJ<T> = {
    [P in keyof T]: TArg;
}

/** @type {*} "rounded" | "primary" | "link" | "info" | "success" | "warning" | "danger"; */
const _variantOBJ = {
    base: "",
    rounded: "rounded-full ",
    primary: "border-primary focus:ring-primary focus:border-primary ",
    link: "border-link focus:ring-link focus:border-link ",
    info: "border-info focus:ring-info focus:border-info ",
    success: "border-success focus:ring-success focus:border-success ",
    warning: "border-warning focus:ring-warning focus:border-warning ",
    danger: "border-danger focus:ring-danger focus:border-danger ",
}


export interface IStyleProps {
    /**
     * 输入框视觉大小，默认为base
     *
     * @type {keyof typeof _SIZEOGJ}
     * @memberof IStyleProps
     */
    size?: keyof typeof _SIZEOGJ;
    variant?: keyof typeof _variantOBJ;
}


const basicStyle = classnames("block rounded-md shadow-sm border focus:ring-2 focus:outline-none " as TArg);

interface anyClsObj {
    [key: string]: TArg | string;
}

// export type clsHelperFn<T, K extends keyof T> = (obj: T, str: K) => TArg | undefined;

/**
 * 辅助函数，输入一个对象和一个字符串，返回classnames样式
 *
 * @template T
 * @template K
 * @param {T} obj
 * @param {K} str
 * @return {*}  {(TArg | undefined)}
 */
const clsHelperFn = <T extends anyClsObj, K extends keyof T>(obj: T, str: K) : TArg | undefined => {
    let res;
    Object.keys(obj).forEach((key) => {
        if (key === str) {
            res = obj[key];
        }
    })
    return res;
}

// 辅助函数，输入一个对象和一个字符串，返回classnames样式
// export const classHelper = (obj:any, str:any) => {
//     let res;
//     Object.keys(obj).forEach((key) => {
//         if (key === str) {
//             res = obj[key];
//         }
//     })
//     return res;
// }

export const inputStyle = ({ size = "base", variant="success" }: IStyleProps) => {
    // const SIZEOGJ = _SIZEOGJ as classOBJ<typeof _SIZEOGJ>;
    // const SIZEFn: clsHelperFn<typeof _SIZEOGJ, keyof typeof _SIZEOGJ> = classHelper;
    // const VARIANTOBJ = _variantOBJ as classOBJ<typeof _variantOBJ>;
    const VARIANT = clsHelperFn(_variantOBJ, variant);
    const SIZE = clsHelperFn(_SIZEOGJ, size);
    return classnames({
        [basicStyle]: true,
        // [classnames(SIZEOGJ["base"])]: size === "base",
        // [classnames(SIZEOGJ["sm"])]: size === "sm",
        // [classnames(SIZEOGJ["md"])]: size === "md",
        // [classnames(SIZEOGJ["lg"])]: size === "lg",
        // [classnames(VARIANTOBJ["primary"])]: variant === "primary",
        // [classnames(VARIANTOBJ["rounded"])]: variant === "rounded",
        // [classnames(VARIANTOBJ["link"])]: variant === "link",
        // [classnames(VARIANTOBJ["info"])]: variant === "info",
        // [classnames(VARIANTOBJ["success"])]: variant === "success",
        // [classnames(VARIANTOBJ["warning"])]: variant === "warning",
        // [classnames(VARIANTOBJ["danger"])]: variant === "danger",
        // [classnames(SIZEFn(_SIZEOGJ, size))]: true,
        // [classnames(VARIANTFn(_variantOBJ, variant))]: true,
        [classnames(SIZE)]: true,
        [classnames(VARIANT)]: true,
    });
}
