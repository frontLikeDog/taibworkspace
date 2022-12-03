// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import  classnames , {TArg} from 'tailwindcss-classnames';

import {ButtonProps} from './button'

// type btnStyleProps = Pick<ButtonProps, "type">
// type btnStyleProps2 = ButtonProps['type']

export type myPick<T,K extends keyof T> = {
  [P in K]: T[P]
}

export type btnStyleProps = myPick<ButtonProps, "type" | "btnDisabled" | "sizes" | "isRadius" | "block">

export const baseButton = classnames(
  'cursor-pointer'
  ,'justify-center',
  'items-center',
  'text-center','whitespace-nowrap',
  'border',
  'shadow-none'
);

export const btnDisabled = classnames(
    baseButton,
    'opacity-60',
    'cursor-not-allowed'
);

const tbui_btn_radius = classnames(
  'rounded',
)

const tbui_btn_color = classnames(
  baseButton,
  'border-transparent','hover:border-transparent',
  'text-white'
)
const tbui_btn_primary = classnames(
  'bg-primary' ,'hover:bg-primary-hover',
  'text-white','hover:text-white',
  tbui_btn_color,
  baseButton,
)

const tbui_btn_link = classnames(
  baseButton,
  'bg-link','hover:bg-link-hover',
  'text-white','hover:text-white',
  tbui_btn_color
)
const tbui_btn_info = classnames(
  baseButton,
  'bg-info','hover:bg-info-hover',
  'text-white','hover:text-white',
  tbui_btn_color
)
const tbui_btn_success = classnames(
  baseButton,
  'bg-success','hover:bg-success-hover',
  'text-white','hover:text-white',
  tbui_btn_color
)
const tbui_btn_warning = classnames(
  baseButton,
  'bg-warning','hover:bg-warning-hover',
  'text-black','hover:text-black',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_Danger = classnames(
  baseButton,
  'bg-danger','hover:bg-danger-hover',
  'text-white','hover:text-white',
  tbui_btn_color
)
const tbui_btn_white = classnames(
  baseButton,
  'bg-white','hover:bg-white-hover',
  'text-black',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_light = classnames(
  baseButton,
  'bg-light','hover:bg-light-hover',
  'text-black-ter',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_dark = classnames(
  baseButton,
  'bg-dark','hover:bg-dark-hover',
  'text-white','hover:text-white',
)
const tbui_btn_black = classnames(
  baseButton,
  'bg-black','hover:bg-black-hover',
  'text-white','hover:text-white',
)
const tbui_btn_text = classnames(
  baseButton,
  'bg-transparent','hover:bg-text-hover',
  'text-black',
  'border-transparent','hover:border-transparent',
  'underline'
)
const tbui_btn_ghost = classnames(
  baseButton,
  'bg-transparent',
  'text-text-ghost','hover:text-text-ghost',
  'border-transparent','hover:border-transparent',
  'hover:underline'
)
// light color btn
const tbui_btn_primary_light = classnames(
  baseButton,
  'bg-primary-light','hover:bg-primary-50',
  'text-primary-700','hover:text-primary-700',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_link_light = classnames(
  baseButton,
  'bg-link-light','hover:bg-link-50',
  'text-link-700','hover:text-link-700',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_info_light = classnames(
  baseButton,
  'bg-info-light','hover:bg-info-50',
  'text-info-dark','hover:text-info-dark',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_success_light = classnames(
  baseButton,
  'bg-success-light','hover:bg-success-50',
  'text-success-dark','hover:text-success-dark',
  'border-transparent','hover:border-transparent',
)
const tbui_btn_warning_light = classnames(
  baseButton,
  'bg-warning-light','hover:bg-warning-50',
  'border-transparent','hover:border-transparent',
  'text-warning-dark','hover:text-warning-dark'
)
const tbui_btn_danger_light = classnames(
  baseButton,
  'bg-danger-light','hover:bg-danger-50',
  'border-transparent','hover:border-transparent',
  'text-danger','hover:text-danger'
)
//btn sizes
const tbui_btn_small = classnames(
  'px-2.5','py-1.5',
  'text-xs',
  'h-8',
)
const tbui_btn_normal = classnames(
    'px-4','py-1.7',
    'text-sm',
    'h-10',
)
const tbui_btn_medium = classnames(
  'px-5','py-2',
  'text-base',
  'h-12'
)
const tbui_btn_large = classnames(
  'px-6','py-3',
  'text-lg',
  'h-14'
)

const tbui_btn_block = classnames(
  'w-full',
  'flex',
  baseButton
)

export const btnStyle = ({...args}:btnStyleProps) => {
  const { type, sizes, isRadius,block } = args;
  return classnames({
    [baseButton]: true,
    [tbui_btn_primary]: type === 'primary',
    [tbui_btn_link]: type === 'link',
    [btnDisabled]: args.btnDisabled,
    [tbui_btn_info]: type === 'info',
    [tbui_btn_success]: type === 'success',
    [tbui_btn_warning]: type === 'warning',
    [tbui_btn_Danger]: type === 'danger',
    [tbui_btn_white]: type === 'white',
    [tbui_btn_light]: type === 'light',
    [tbui_btn_dark]: type === 'dark',
    [tbui_btn_black]: type === 'black',
    [tbui_btn_text]: type === 'text',
    [tbui_btn_ghost]: type === 'ghost',
    [tbui_btn_primary_light]: type === 'primary-light',
    [tbui_btn_link_light]: type === 'link-light',
    [tbui_btn_info_light]: type === 'info-light', 
    [tbui_btn_success_light]: type === 'success-light', 
    [tbui_btn_warning_light]: type === 'warning-light',
    [tbui_btn_danger_light]: type === 'danger-light',
    [tbui_btn_small]: sizes === 'small',
    [tbui_btn_normal]: sizes === 'normal',
    [tbui_btn_medium]: sizes === 'medium',
    [tbui_btn_large]: sizes === 'large',
    [tbui_btn_radius]: isRadius,
    [tbui_btn_block]: block,

  } as unknown as TArg)

}