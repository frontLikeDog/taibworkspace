import { classnames, TMaxWidth, TTailwindString } from 'tailwindcss-classnames';

export type SizeEnum = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
type MSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IContainerProps {
  size: SizeEnum;
  centerContent?: boolean;
}
export type styleFunc<T> = (props: T) => TTailwindString;

/**
 * 设置元素最大宽度,默认为lg
 *
 * @param {SizeEnum} size
 * @return { string } tw class
 */
const containerSize = (size: SizeEnum) => {
  let SizeCLASS: SizeEnum = '';
  const CLASSOBJ = {
    xs: 'max-w-xl',
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-screen-xl',
  };
  const hasCustom = Object.keys(CLASSOBJ).filter((key) => key === size);
  SizeCLASS =
    hasCustom.length > 0 ? CLASSOBJ[hasCustom[0] as MSize] : `max-w-[${size}]`;
  return classnames(SizeCLASS as TMaxWidth);
};

const baseStyle = classnames('p-2');

const Center = classnames('mx-auto', 'text-center');

/**
 * 根据传入的参数，返回对应的tailwind class
 * 设置默认pading ,居中，最大宽度
 * @param {*} {
 *   size,
 *   centerContent,
 * }
 * @return {*} 
 */
const containStyle: styleFunc<IContainerProps> = ({
  size,
  centerContent,
}) => {
  return classnames({
    [baseStyle]: true,
    [containerSize(size)]: true,
    [Center]: centerContent,
  });
};

export { containStyle }