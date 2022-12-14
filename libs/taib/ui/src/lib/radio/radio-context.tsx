import * as React from 'react';
import type { RadioChangeEvent, RadioGroupOptionType } from './radio';

export interface RadioContextProps {
  onChange?: (e: RadioChangeEvent ) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  /**
   * 控制radio样式是否为button,默认'default'
   * @type {RadioGroupOptionType}
   * @memberof RadioContextProps
   */
  optionType?: RadioGroupOptionType;
}

const RadioGroupContext = React.createContext<RadioContextProps | null>(null);

export const ProviderRadioGroup = RadioGroupContext.Provider;

export default RadioGroupContext;
