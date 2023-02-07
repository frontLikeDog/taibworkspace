/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {useCallback, useRef, useState} from 'react';

export const useControllableProp = <T>(
  prop: T | undefined,
  state: T,
): readonly [boolean, T] => {
  const { current: isControlled } = useRef(prop !== undefined);
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;

  return [isControlled, value] as const;
};

export function useControlledState<T>(
  value: T,
  defaultValue: T,
  onChange: (value: T, ...args: any[]) => void
): [T, (value: T, ...args: any[]) => void]  {
  const [stateValue, setStateValue] = useState(value || defaultValue);
  const ref = useRef(value !== undefined);
  const wasControlled = ref.current;
  const isControlled = value !== undefined;
  // Internal state reference for useCallback
  const stateRef = useRef(stateValue);
  if (wasControlled !== isControlled) {
    console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
  }

  ref.current = isControlled;

  const setValue = useCallback((value:T, ...args:any[]) => {
    const onChangeCaller = (value: T, ...onChangeArgs: any[]) => {
      if (onChange) {
        if (!Object.is(stateRef.current, value)) {
          onChange(value, ...onChangeArgs);
        }
      }
      if (!isControlled) {
        stateRef.current = value;
      }
    };

    if (typeof value === 'function') {
      console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
      // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
      // when someone using useControlledState calls setControlledState(myFunc)
      // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
      // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
      // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
      const updateFunction = (oldValue: any, ...functionArgs: any[]) => {
        const interceptedValue = value(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled) {
          return interceptedValue;
        }
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled) {
        setStateValue(value);
      }
      onChangeCaller(value, ...args);
    }
  }, [isControlled, onChange]);

  // If a controlled component's value prop changes, we need to update stateRef
  if (isControlled) {
    stateRef.current = value;
  } else {
    value = stateValue;
  }

  return [value, setValue];
}
