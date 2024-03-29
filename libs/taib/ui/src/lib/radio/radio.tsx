import type { AbstractCheckboxProps } from '../checkbox/checkbox';
// import styles from './radio.module.css';
import * as clsn from './styles';
import RcCheckbox from 'rc-checkbox';
import React, { useEffect } from 'react';
import RadioGroupContext from './radio-context';


export type RadioGroupOptionType = 'default' | 'button';

export type RadioProps = Omit<AbstractCheckboxProps<RadioChangeEvent>,"onChange"> & {
  onChange?: (e: RadioChangeEvent) => void;
};

interface RadioOptionType {
  label?: React.ReactNode;
  value?: string | number;
  disabled?: boolean;
  name?: string;
}

export interface RadioGroupProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: DisabledType;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React.ReactNode;
  options?: Array<RadioOptionType | string | number>;
  id?: string;
  /**
   * 按钮类型的样式或者默认样式
   * @type {RadioGroupOptionType}
   * @memberof RadioGroupProps
   */
  optionType?: RadioGroupOptionType;
  /**
   *  选中焦点时触发的回调函数
   * @type {React.FocusEventHandler<HTMLDivElement>}
   * @memberof RadioGroupProps
   */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  /**
   * 失去焦点时触发的回调函数
   * @type {React.FocusEventHandler<HTMLDivElement>}
   * @memberof RadioGroupProps
   */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export type DisabledType = true | false | undefined;

const InternalRadio: React.ForwardRefRenderFunction<HTMLElement, RadioProps> = (
  props,
  ref
) => {
  const {
    className,
    children,
    style,
    onMouseEnter,
    onMouseLeave,
    id,
    ...restProps
  } = props;
  const contextGroup = React.useContext(RadioGroupContext);
  const radioProps: RadioProps = { ...restProps };
  const [isCheck, setIsCheck] = React.useState(false);

  const onChange = (e: RadioChangeEvent) => {
    // console.log(e);
    setIsCheck(e.target.checked);
    props.onChange?.(e);
    contextGroup?.onChange?.(e);
  };
  if (contextGroup) {
    radioProps.name = contextGroup.name;
    radioProps.isChecked = contextGroup.value === props.value;
    radioProps.disabled = props.disabled || contextGroup.disabled;
  }

  const clsProps = { disabled: radioProps.disabled };
  const markupId = id ? id : 'radio-' + props.value;
   return (
    <label
      htmlFor={markupId}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={clsn.stylesRadio(clsProps)}
    >
      <RcCheckbox
        id={markupId}
        type="radio"
        name={radioProps.name}
        value={radioProps.value}
        onChange={onChange as unknown as (e: Event) => void}
        checked={contextGroup ? radioProps.isChecked : isCheck}
      />
      {props.children && <span className="px-1">{props.children}</span>}
    </label>
  );
};

const Radio = React.forwardRef<HTMLElement, RadioProps>(InternalRadio);

export default Radio;
