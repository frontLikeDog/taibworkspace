import { useEffect } from 'react';
import { baseColor } from '../utils/colors';
import styles from './badge.module.css';
import { badgeClsFn } from './style';


/* eslint-disable-next-line */
export interface BadgeProps {
  colors?: baseColor;
  className?: string;
}

export function Badge(props: BadgeProps) {
  const { colors="black", className:clsn="" } = props;

  useEffect(() => {
    console.log('badge', badgeClsFn(colors));
  }, [colors]);

  return (
    <div className={styles['container']}>
      <span className={badgeClsFn(colors) + `${clsn}`}>Badge</span>
    </div>
  );
}

export default Badge;
