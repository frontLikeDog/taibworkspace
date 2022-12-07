import React from 'react';
import * as styles from './styles'
import { IStyleProps } from './styles';

/* eslint-disable-next-line */
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>{
  /**
   * 如果为true，则将禁用输入
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isDisable: boolean;
  /**
   * 如果为true，则必须输入
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isRequired: boolean;
  /**
   * 如果为真，输入框将填充父元素的全部宽度
   *
   * @type {boolean}
   * @memberof InputProps
   */
  isFullWidth: boolean;
  size: IStyleProps["size"];
  variant: IStyleProps["variant"];
  addonLeft: React.ReactNode;
  /**
   * 右侧附加组件：它可以是一个图标或任何形式的JSX元素
   *
   * @type {React.ReactNode}
   * @memberof InputProps
   */
  addonRight: React.ReactNode;
}

export interface InputRef {
  input: () => HTMLInputElement | null;
  // focus: () => void;
  // blur: () => void;
  // select: () => void;
}

const Input = React.forwardRef<InputRef,InputProps>(
  (props, ref) => {
    const { addonLeft, addonRight, size="base",variant, ...rest } = props;
    const clsArgs = { size, variant };
    return (
      <div>
        {props.addonLeft && <div>{props.addonLeft}</div>}
        <input className={styles.inputStyle(clsArgs)} type="text" />
      </div>
    );
  }
)

export default Input;
