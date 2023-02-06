import { RadioChangeEvent } from '../radio/radio';
// import styles from './checkbox.module.css';
import React from 'react';
import { CtxCheckboxGroup } from './checkbox-group';

export interface AbstractCheckboxProps<T> {
  className?: string;
  /**
   * 是否初始化选中状态，false
   * @type {boolean}
   * @memberof AbstractCheckboxProps
   */
  defaultChecked?: boolean;
  /**
   * 当前选中状态
   * @type {boolean}
   * @memberof AbstractCheckboxProps
   */
  isChecked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
  isIndeterminate?: boolean;
}

export const InternalCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (props, ref) => {
  const { children, isChecked, className, ...rest } = props;
  let { onChange } = props;

  const group  = React.useContext(CtxCheckboxGroup);

  if(group?.color) {
    rest.color = group.color;
  }

  if(group?.onChange) {
    onChange = group.onChange;
  }
  const { state, getInputProps } = useCheckbox({ isChecked, onChange, ...rest });

  return (
    <label className="relative inline-flex items-center text-sm">
      <input
        className="text-sm w-8 h-8" //className='form-checkbox m-2 transform scale-150 checked:text-lg checked:text-red-500'
        {...getInputProps({ ref })}
        // type="checkbox" disabled={props.disabled} checked={props.checked}
        // onChange={handleChange}
        // ref={ref}
      />
      {children && (
        <label id={props.id} className="text-primary pl-1">
          {children}
        </label>
      )}
    </label>
  );
};
interface useCheckboxProps
  extends Pick<AbstractCheckboxProps<null>, 'defaultChecked' | 'isChecked'> {
  id?: string;
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIndeterminate?: boolean;
}

const useCheckbox = (props: useCheckboxProps) => {
  const {id,name,value,onChange,defaultChecked,isChecked: checkedProps,isIndeterminate,} = props;
  const ref = React.useRef<HTMLInputElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = isIndeterminate || false;
    }
  }, [isIndeterminate]);

  const getInputProps = (inputProps: HiddenInputProps = {}) => {
    const { ref: inputRef,...rest } = inputProps;
    return {
      ...rest,
      type: 'checkbox',
      checked: checkedProps,
      id,name,value,
      ref: mergeRefs(ref, inputRef),
    };
  };
  return {
    state: {
      defaultChecked,
      checkedProps,
      isIndeterminate,
    },
    getInputProps,
  };
};

export const mergeRefs = (...refs: any[]) => {
  return (node: any) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  };
};
export type HiddenInputProps = {
  ref?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  InternalCheckbox
);
export default Checkbox;
