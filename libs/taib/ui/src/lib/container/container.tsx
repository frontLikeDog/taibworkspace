import React, { FC } from 'react';
import * as styles from './styles';
import type { SizeEnum } from './styles';

export type PropsOfAny = {
  className?: string;
  children: React.ReactNode;
};

export type ContainerProps = PropsOfAny & {
  /**
   * The size (width and height) of the square
   * It uses the range value in your tailwind.config.js file
   * i.e lg = w-2/3
   * Also accept values like 100%, 20px, 40 ...
   * 与Tailwind 的内置容器相反，会自动居中，内边距为0.5 rem
   */
  size: SizeEnum;
  /**
   * If `true`, the content will be centered in the square
   */
  centerContent?: boolean;
};

const Container: FC<ContainerProps> = (props) => {
  const { children, className = '', size = '', centerContent = true } = props;
  const clsArgs = { size, centerContent };
  return (
    <div className={styles.containStyle(clsArgs) + className}>{children}</div>
  );
};

export default Container;
