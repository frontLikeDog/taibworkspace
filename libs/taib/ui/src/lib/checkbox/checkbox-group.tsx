import React from 'react';
import { useControllableProp } from '../hooks';
import { callAllHandler } from '../utils';
import { addItem, removeItem } from '../utils/array';
import { isInputEvent } from '../utils/assersions';
import * as twcls from './styles';

export type CheckboxValType = string | number | boolean;

type EventOrValue = React.ChangeEvent<HTMLInputElement> | string | number;
export interface ContextGroupProps {
  /**
   * 复选框组的大小
   * @type {('sm' | 'md' | 'lg')}
   * @memberof ContextGroupProps
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 复选框组的颜色
   * @type {string}
   * @memberof ContextGroupProps
   */
  color?: string;
  name?: string;
  disabled?: boolean;
  value?: any;
  defaultValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
interface OptionType {
  label?: React.ReactNode;
  value?: CheckboxValType;
}
export interface CheckboxGroupProps
  extends Pick<ContextGroupProps, 'disabled' | 'color'> {
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  /**
   * 当前复选框组选中的值
   * @type {Array<CheckboxValType>}
   * @memberof CheckboxGroupProps
   */
  value?: Array<CheckboxValType>;
  defaultValue?: Array<string | number>;
  /**
   * 复选框的自定义值类型
   * @type {(Array<OptionType | string | number>)}
   * @memberof CheckboxGroupProps
   */
  options?: Array<OptionType | string | number>;
}

export const CtxCheckboxGroup = React.createContext<ContextGroupProps | null>(
  null
);

export const InternalCheckboxGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CheckboxGroupProps
> = (props, ref) => {
  const { className, name, disabled, children } = props;
  const { onChange, value, color, size } = useCheckboxGroup(props);
  const context = React.useMemo(
    () => ({
      value,
      onChange,
    }),
    [onChange, value]
  );

  return (
    <div className={twcls.stylesCheckbox({ disabled }) + className} ref={ref}>
      <CtxCheckboxGroup.Provider value={{ ...context, color, size, name }}>
        {children}
      </CtxCheckboxGroup.Provider>
    </div>
  );
};

export interface IUseCheckboxGroup
  extends Pick<CheckboxGroupProps, 'value' | 'onChange'> {
  defaultValue?: Array<CheckboxValType>;
  size?: ContextGroupProps['size'];
  color?: string;
}

export const useCheckboxGroup = (props: IUseCheckboxGroup) => {
  const {
    defaultValue,
    value: valProp,
    onChange: onChangeProp,
    ...restProps
  } = props;

  const [valueState, setValue] = React.useState(defaultValue || []);
  const [isControlled, value] = useControllableProp(valProp, valueState);

  const updateValue = React.useCallback(
    (nextState: any) => {
      if (!isControlled) {
        setValue(nextState);
      }

      onChangeProp?.(nextState);
    },
    [isControlled, onChangeProp]
  );

  const onChange = React.useCallback(
    (eventOrValue: EventOrValue) => {
      if (!value) return;

      const isChecked = isInputEvent(eventOrValue)
        ? eventOrValue.target.checked
        : !value.includes(eventOrValue);

      const selectedValue = isInputEvent(eventOrValue)
        ? eventOrValue.target.value
        : eventOrValue;

      const nextValue = isChecked
        ? addItem(value, selectedValue)
        : removeItem(value, selectedValue);

      updateValue(nextValue);
    },
    [updateValue, value]
  );

  return {
    ...restProps,
    value,
    onChange:callAllHandler(props.onChange, onChange),
    setVal: updateValue,
    getCheckboxProps: (option: any) => {
      return {
        ...option,
        onChange,
      };
    },
  };
};

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  InternalCheckboxGroup
);
export default CheckboxGroup;
