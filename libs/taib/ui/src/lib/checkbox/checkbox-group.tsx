import React from 'react';
import * as twcls from './styles';

export type CheckboxValType = string | number | boolean;
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
  extends Pick<ContextGroupProps, 'disabled' | "color"> {
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
  /**
   * 复选框的自定义值类型
   * @type {(Array<OptionType | string | number>)}
   * @memberof CheckboxGroupProps
   */
  options?: Array<OptionType | string | number>;
}

export const CtxCheckboxGroup = React.createContext<ContextGroupProps | null>(null);

export const InternalCheckboxGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CheckboxGroupProps
> = (props, ref) => {
  const { className, name ,disabled ,children} = props;
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
      <CtxCheckboxGroup.Provider value={{...context,color,size,name}}>
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

  return {
    ...restProps,
    value: valProp,
    onChange: onChangeProp,
    getCheckboxProps: (option: any) => {
      return {
        ...option,
        onChange: onChangeProp,
      };
    },
  };
};

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  InternalCheckboxGroup
);
export default CheckboxGroup;
