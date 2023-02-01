import React from 'react';
import * as twcls from './styles'
type CheckboxValType = string | number | boolean;
export interface ContextGroupProps {
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  disabled?: boolean;
  value?: any;
}
interface OptionType {
  label?: React.ReactNode;
  value?: CheckboxValType;
}
export interface CheckboxGroupProps extends Pick<ContextGroupProps, 'disabled'> {
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (e: Event) => void;
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

const CtxCheckboxGroup = React.createContext<ContextGroupProps | null>(null);

export const InternalCheckboxGroup: React.ForwardRefRenderFunction<HTMLDivElement,CheckboxGroupProps> = (props, ref) => {
  const { className, children,disabled, ...restProps } = props;
  const [value, setVal] = React.useState<Array<CheckboxValType>>([]);

  const context = React.useMemo(() => ({
      name: restProps.name,
      value: value,
    }),[restProps.name, value]);

  return (
    <div className={twcls.stylesCheckbox({disabled}) + className} ref={ref}>
      <CtxCheckboxGroup.Provider value={context}>
        {children}
      </CtxCheckboxGroup.Provider>
    </div>
  );
};

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(InternalCheckboxGroup);
export default CheckboxGroup;
