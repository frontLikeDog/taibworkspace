import React from 'react';
import Radio from './radio';
import type { RadioGroupProps } from './radio';
import { ProviderRadioGroup } from './radio-context';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      children,
      optionType,
      disabled,
      name,
      options,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      id,
      className,
      style,
      ...rest
    } = props;
    let childrenToRender = children;
    if (options && options.length > 0) {
      childrenToRender = options.map((option,index) => {
        if (typeof option === 'string' || typeof option === 'number') {
          // 传入的option是一个字符串
          return (
            <Radio key={index} value={option} disabled={disabled} name={name}>
              {option}
            </Radio>
          );
        } else {
          // 传入的option是一个对象 {label: 'xxx', value: 'xxx'}
          return (
            <Radio
              key={`options-g-keys`+index + option.value}
              value={option.value}
              disabled={option.disabled || disabled}
              name={option.name || name}
            >
              {option.label}
            </Radio>
          );
        }
      });
    }

    const providerValue = React.useMemo(() => {
      return {
        value,
        onChange,
        optionType,
        disabled,
        name,
      };
    }, [value, onChange, optionType, disabled, name]);

    return (
      <div
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
        className={``+className}
        style={style}
      >
        <ProviderRadioGroup value={providerValue}>
          {childrenToRender}
        </ProviderRadioGroup>
      </div>
    );
  }
);

export default React.memo(RadioGroup);
