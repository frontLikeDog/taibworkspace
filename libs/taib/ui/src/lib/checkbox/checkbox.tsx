import { RadioChangeEvent } from '../radio/radio';
// import styles from './checkbox.module.css';
import React, { Children } from 'react';

export interface AbstractCheckboxProps<T> {
  className?: string;
  /**
   * 默认选中状态，false
   * @type {boolean}
   * @memberof AbstractCheckboxProps
   */
  defaultChecked?: boolean;
  /**
   * 是否被默认选中（当页面加载时）
   *
   * @type {boolean}
   * @memberof AbstractCheckboxProps
   */
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  /**
   * 对 checkbox 类型的输入有特殊作用：当表单被提交时，只有当前被选中的复选框会被提交给服务器，值是 value 属性的值。
   * 如果没有指定 value，默认为字符串 on
   * @type {*}
   * @memberof AbstractCheckboxProps
   */
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
  /**
   * 重写选中颜色样式
   * @type {string}
   * @memberof AbstractCheckboxProps
   */
  color?: string;
}

export interface CheckboxProps extends AbstractCheckboxProps<RadioChangeEvent> {
  /**
   * 设置 indeterminate(中间) 状态，只负责样式控制
   * @type {boolean}
   * @memberof CheckboxProps
   */
  indeterminate?: boolean;
}

export const InternalCheckbox:React.ForwardRefRenderFunction<HTMLInputElement,CheckboxProps> = (props,ref) => {
  const {children} = props;
  return (
    <label className='relative inline-flex items-center text-sm'>
      <input 
        className='text-sm w-8 h-8'
        type="checkbox" disabled={props.disabled} checked={props.defaultChecked} ref={ref} />
      <input type="checkbox" className='m-2 transform scale-150 appearance-none checked:text-lg checked:text-red-400' checked={true} />
      {
        children && (
          <label className='text-primary'>
            {children}
          </label>
        )
      }
    </label>
  );
}

const Checkbox = React.forwardRef<HTMLInputElement,CheckboxProps>(InternalCheckbox);
export default Checkbox;
