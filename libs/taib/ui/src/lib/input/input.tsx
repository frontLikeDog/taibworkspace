import React from 'react';
import RcInput from 'rc-input'
import * as styles from './styles'
import type { IStyleProps } from './styles';
import type { InputRef } from 'rc-input';

/* eslint-disable-next-line */
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>{
  /**
   * 如果为true，则将禁用输入
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isDisable?: boolean;
  /**
   * 如果为true，则必须输入
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isRequired?: boolean;
  /**
   * 如果为真，输入框将填充父元素的全部宽度
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isFullWidth?: boolean;
  size?: IStyleProps["size"];
  variant?: IStyleProps["variant"];
  addonLeft?: React.ReactNode;
  /**
   * 右侧附加组件：它可以是一个图标或任何形式的JSX元素
   *
   * @type {React.ReactNode}
   * @memberof InputProps
   */
  addonRight?: React.ReactNode;
}

interface IRef {
  input?: () => HTMLInputElement | null;
  focus?: () => void;
  blur?: () => void;
}

const Input = React.forwardRef<IRef,InputProps>(
  (props, iref) => {
    const { addonLeft, addonRight, size="base",variant,onChange,onBlur,onFocus, ...rest } = props;
   
    const inputRef = React.useRef<any>(null);
    const _addon = (addonLeft || addonRight) ? true : false
    React.useImperativeHandle(iref, () => ({
      input: () => inputRef?.current,
      focus: () => {
        inputRef?.current?.focus();
      },
      blur: () => {
        inputRef?.current?.blur();
      },
    }))
    const clsArgs = { size, variant,_addon };
    return (
      <div  className='flex items-center overflow-hidden'>
        {props.addonLeft && <div className='flex justify-center rounded-l-md rounded-r-none w-10 bg-primary p-3 h-full border border-primary'>{props.addonLeft}</div>}
        <RcInput className={styles.inputStyle(clsArgs)}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          type="text"
          ref={inputRef}
        />
        {props.addonRight && <div  className='flex justify-center rounded-r-md rounded-l-none w-10 bg-primary p-3 h-full border border-primary'>{props.addonRight}</div>}
      </div>
    );
  }
)

export default Input;
