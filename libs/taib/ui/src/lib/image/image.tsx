import React from 'react';

import * as imgStyles from './styles';

export interface ImageProps {
  alt?: string;
  type?: 'rounded' | 'circle';
  preSize?: '16' | '24' | '32' | '48' | '64' | '96' | '128' | '256' | '512';
  styles?: React.CSSProperties;
  isResponsive?: boolean;
}

const Image = (props: ImageProps) => {
  const { alt, type, preSize = '256', styles, isResponsive } = props;
  const style1 = isResponsive ? 'w-full h-auto' : '';
  return (
    <img
      className={style1 + imgStyles.imgStyle({ type })}
      src={`https://via.placeholder.com/${preSize}`}
      style={styles}
      alt={alt}
    />
  );
};

export default Image;
