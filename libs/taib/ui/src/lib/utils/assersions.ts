import { ChangeEvent } from 'react';
import { Dict } from './types';

export const isInputEvent = (value: any): value is ChangeEvent =>
  value && isObject(value) && isObject(value['target']);

export const isObject = (value: any): value is Dict => {
  const type = typeof value;

  return (
    value !== null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  );
};

export const isArray = <T>(value: any): value is Array<T> => {
  return Array.isArray(value);
};
