import React, { useCallback, useRef } from 'react';

export interface IUserControllableProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
  shouldUpdate?: (prevValue: T, nextValue: T) => boolean;
}

export type returnTypes<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export /**
 * 像useState一样,返回state和更新state的函数
 * 受控组件时传参为state的value,非受控组件时传参为一般变量
 * @template T
 * @param {IUserControllableProps<T>} props
 * @return {*}  {returnTypes<T>}
 */
const useControllableState = <T>(
  props: IUserControllableProps<T>
): returnTypes<T> => {
  const {
    value: valProp,
    defaultValue,
    onChange,
    shouldUpdate = () => true,
  } = props;
  const [valState, setValState] = React.useState<T>(defaultValue as T);
  const { current: isControlled } = useRef(valProp !== undefined);
  const value = isControlled ? valProp : valState;

   const updateVal = useCallback(
    (next:any) => {
      const nextValue =
        typeof next === 'function' ? next(value) : next;
      const shouldUpdateValue = shouldUpdate(value as T, nextValue);

      if (!shouldUpdateValue) return;

      if (!isControlled) {
        setValState(next);
      }
      onChange?.(nextValue);
    },
    [value, isControlled, onChange, shouldUpdate]
  );

  return [value, updateVal] as returnTypes<T>;
};
