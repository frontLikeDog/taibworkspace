import React from 'react';
import { useControllableColor } from '../hooks/useControllableColors';
import { baseColor, SetColorWithBgAndText } from '../utils/colors';

/* eslint-disable-next-line */
export interface AlertProps {
  label?: string;
  color?: baseColor;
}

export const Alert = (props: AlertProps) => {
  const { label, color = 'primary' } = props;
  const [colorVal, setColor] = useBgAndTextColors(color);
  const aa = useControllableColor({ type: 'border-b', color: 'primary' });
  React.useEffect(() => {
    console.log('hook---',aa);
  }, []);

  console.log(aa);
  return (
    <div
      className={colorVal + ` rounded-lg py-3 px-5 mb-3 text-base`}
      role={'alert'}
    >
      {label ??
        `Your browser is outdated! Your Taib experience may be degraded.the val is --${aa.clsVal}`}
    </div>
  );
};

const useBgAndTextColors = (color: baseColor) => {
  const [colorVal, setColor] = React.useState<any>();
  React.useEffect(() => {
    setColor(() => SetColorWithBgAndText(color));
  }, [color]);

  return [colorVal, setColor];
};

export default Alert;
