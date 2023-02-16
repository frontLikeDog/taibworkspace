import React from 'react';

interface IUserDisclosureProps {
  isOpen?: boolean;
  // 非受控组件的默认值
//   defaultIsOpen?: boolean;
//   onoOpen?(): void;
//   onClose?(): void;
}

/**
 * 第一个版本只返回isOpen，onOpen，onClose三个属性，后续可以扩展
 * @export
 * @param {IUserDisclosureProps} props
 * @return {*} 
 */
export function useDisclosesure(props: IUserDisclosureProps) {
  const {
    isOpen: isOpenProp
  } = props;

  const [isOpenState, setIsOpenState] = React.useState(isOpenProp || false);

  const onOpen = () => {
    setIsOpenState(true);
    };

  const onClose = () => {
    setIsOpenState(false);
    };

  return {
    isOpen: isOpenState,
    onOpen,
    onClose,
  };
}
