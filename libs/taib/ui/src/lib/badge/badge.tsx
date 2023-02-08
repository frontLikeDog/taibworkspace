// import { useEffect } from 'react';
import { baseColor } from '../utils/colors';
import { badgeClsFn } from './style';


/* eslint-disable-next-line */
export interface BadgeProps {
  colors?: baseColor;
  className?: string;
}

export function Badge(props: BadgeProps) {
  const { colors="black", className:clsn="" } = props;

  // useEffect(() => {
  //   console.log('badge', badgeClsFn(colors));
  // }, [colors]);

  return (
      <span className={badgeClsFn(colors) + `${clsn}`}>Badge</span>
  );
}

export default Badge;
