import React, { ReactNode } from 'react';
import { IconHome, IconXMark } from '../icons';
import { baseColor } from '../utils/colors';
import { outDivCls, colorBgAndText } from './style';

export interface ToastProps {
  color?: baseColor;
  className?: string;
  headIcon?: ReactNode;
  headTitle?: string;
  headTime?: string;
}

export const Toast = (props:ToastProps) => {
  const { color = 'primary',headIcon,headTitle,headTime } = props;
  // console.log('color---', outDivCls(color));
  return (
    <div
      className={outDivCls(color)}
      id="static-example"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-mdb-autohide="false"
    >
      <div
        className={
          colorBgAndText(color) +
          ` flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-b-gray-100 rounded-t-lg`
        }
      >
        <div className="font-bol flex items-center justify-center">
          { headIcon ?? <IconHome />}
          <div className="mx-1 align-bottom">{headTitle ?? 'TaibUI'}</div>
        </div>
        <div className="flex items-center">
          <p className="opacity-90 text-xs">{ headTime ?? '11 mins ago'}</p>
          <div className="mx-2 cursor-pointer">
            <IconXMark />
          </div>
        </div>
      </div>
      <div className={colorBgAndText(color) + ` p-3 rounded-b-lg break-words`}>
        This is a {color} toast.
      </div>
    </div>
  )
};

export default Toast;
