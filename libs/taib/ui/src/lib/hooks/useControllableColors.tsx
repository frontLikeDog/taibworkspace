/**
 *
 *
 */

import { useEffect, useState } from 'react';

type preColors =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
  | 'white'
  | 'black'
  | 'gray';

// 定义预置颜色对象类型,键为baseColor类型,值为string类型
type colorObj = {
  [key in preColors]: string;
};

// 定义预置背景颜色对象
const presetBgColors: colorObj = {
  primary: 'bg-primary',
  link: 'bg-link',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  dark: 'bg-dark',
  light: 'bg-light',
  white: 'bg-white',
  black: 'bg-black',
  gray: 'bg-gray',
};

// 定义预置文本颜色对象
const presetTextColors: colorObj = {
  primary: 'text-primary',
  link: 'text-link',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  dark: 'text-dark',
  light: 'text-light',
  white: 'text-white',
  black: 'text-black',
  gray: 'text-gray',
};

// 定义borer-x颜色类型
type borderXColorObj = {
  [key in `border-x-${preColors}`]: string;
};

// 定义预置border-y颜色类型
type borderYColorObj = {
  [key in `border-y-${preColors}`]: string;
};

// 定义预置border-t颜色类型
type borderTColorObj = {
  [key in `border-t-${preColors}`]: string;
};

// 定义预置border-r颜色类型
type borderRColorObj = {
  [key in `border-r-${preColors}`]: string;
};

// 定义预置border-b颜色类型
type borderBColorObj = {
  [key in `border-b-${preColors}`]: string;
};

// 定义预置border-l颜色类型
type borderLColorObj = {
  [key in `border-l-${preColors}`]: string;
};

// 定义预置border颜色类型
type borderColorObj = {
  [key in `border-${preColors}`]: string;
};

// 定义预置border-x颜色对象
const presetBorderXColors: borderXColorObj = {
  'border-x-primary': 'border-x-primary',
  'border-x-link': 'border-x-link',
  'border-x-info': 'border-x-info',
  'border-x-success': 'border-x-success',
  'border-x-warning': 'border-x-warning',
  'border-x-danger': 'border-x-danger',
  'border-x-dark': 'border-x-dark',
  'border-x-light': 'border-x-light',
  'border-x-white': 'border-x-white',
  'border-x-black': 'border-x-black',
  'border-x-gray': 'border-x-gray',
};

// 定义预置border-y颜色对象
const presetBorderYColors: borderYColorObj = {
  'border-y-primary': 'border-y-primary',
  'border-y-link': 'border-y-link',
  'border-y-info': 'border-y-info',
  'border-y-success': 'border-y-success',
  'border-y-warning': 'border-y-warning',
  'border-y-danger': 'border-y-danger',
  'border-y-dark': 'border-y-dark',
  'border-y-light': 'border-y-light',
  'border-y-white': 'border-y-white',
  'border-y-black': 'border-y-black',
  'border-y-gray': 'border-y-gray',
};

// 定义预置border-t颜色对象
const presetBorderTColors: borderTColorObj = {
  'border-t-primary': 'border-t-primary',
  'border-t-link': 'border-t-link',
  'border-t-info': 'border-t-info',
  'border-t-success': 'border-t-success',
  'border-t-warning': 'border-t-warning',
  'border-t-danger': 'border-t-danger',
  'border-t-dark': 'border-t-dark',
  'border-t-light': 'border-t-light',
  'border-t-white': 'border-t-white',
  'border-t-black': 'border-t-black',
  'border-t-gray': 'border-t-gray',
};

// 定义预置border-r颜色对象
const presetBorderRColors: borderRColorObj = {
  'border-r-primary': 'border-r-primary',
  'border-r-link': 'border-r-link',
  'border-r-info': 'border-r-info',
  'border-r-success': 'border-r-success',
  'border-r-warning': 'border-r-warning',
  'border-r-danger': 'border-r-danger',
  'border-r-dark': 'border-r-dark',
  'border-r-light': 'border-r-light',
  'border-r-white': 'border-r-white',
  'border-r-black': 'border-r-black',
  'border-r-gray': 'border-r-gray',
};

// 定义预置border-b颜色对象
const presetBorderBColors: borderBColorObj = {
  'border-b-primary': 'border-b-primary',
  'border-b-link': 'border-b-link',
  'border-b-info': 'border-b-info',
  'border-b-success': 'border-b-success',
  'border-b-warning': 'border-b-warning',
  'border-b-danger': 'border-b-danger',
  'border-b-dark': 'border-b-dark',
  'border-b-light': 'border-b-light',
  'border-b-white': 'border-b-white',
  'border-b-black': 'border-b-black',
  'border-b-gray': 'border-b-gray',
};

// 定义预置border-l颜色对象
const presetBorderLColors: borderLColorObj = {
  'border-l-primary': 'border-l-primary',
  'border-l-link': 'border-l-link',
  'border-l-info': 'border-l-info',
  'border-l-success': 'border-l-success',
  'border-l-warning': 'border-l-warning',
  'border-l-danger': 'border-l-danger',
  'border-l-dark': 'border-l-dark',
  'border-l-light': 'border-l-light',
  'border-l-white': 'border-l-white',
  'border-l-black': 'border-l-black',
  'border-l-gray': 'border-l-gray',
};

// 定义预置border颜色对象
const presetBorderColors: borderColorObj = {
  'border-primary': 'border-primary',
  'border-link': 'border-link',
  'border-info': 'border-info',
  'border-success': 'border-success',
  'border-warning': 'border-warning',
  'border-danger': 'border-danger',
  'border-dark': 'border-dark',
  'border-light': 'border-light',
  'border-white': 'border-white',
  'border-black': 'border-black',
  'border-gray': 'border-gray',
};

const borderTypes = [
  'border-x',
  'border-y',
  'border-t',
  'border-r',
  'border-b',
  'border-l',
  'border',
] as const;
// 定义border类型，border-x、border-y、border-t、border-r、border-b、border-l、border
type argBorderTypes = typeof borderTypes[number];

// 定义类型返回背景色、边框颜色、字体颜色
type argColorTypes = 'bg' | argBorderTypes | 'text';

// 自定义react hook,可控制返回背景色、边框颜色、字体颜色
export function useControllableColor<T extends argColorTypes>({
  type,
  color = 'primary',
}: {
  type: T;
  color?: preColors;
}) {
  // const [typeColor, setTypeColor] = useState<T>(type ?? 'bg');
  // const [colorValue, setColorValue] = useState<preColors>(color ?? 'primary');

  //颜色值
  const [clsVal, setCls] = useState<any>();

  useEffect(() => {
    // 设置clsVa;
    switch (type) {
        case "bg":
            setCls(presetBgColors[color]);
            break;
        case "text":
            setCls(presetTextColors[color]);
            break;
        case "border-x":
            setCls(presetBorderXColors[`border-x-${color}`]);
            break;
        case "border-y":
            setCls(presetBorderYColors[`border-y-${color}`]);
            break;
        case "border-t":
            setCls(presetBorderTColors[`border-t-${color}`]);
            break;
        case "border-r":
            setCls(presetBorderRColors[`border-r-${color}`]);
            break;
        case "border-b":
            setCls(presetBorderBColors[`border-b-${color}`]);
            break;
        case "border-l":
            setCls(presetBorderLColors[`border-l-${color}`]);
            break;
        case "border":
            setCls(presetBorderColors[`border-${color}`]);
            break;
        default:
            setCls("")
    }
  }, [type, color]);

  return {
    clsVal,
  };
}
