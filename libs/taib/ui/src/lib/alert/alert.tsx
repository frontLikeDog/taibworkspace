import React from 'react';
import { baseColor, SetColorWithBgAndText } from '../utils/colors';

/* eslint-disable-next-line */
export interface AlertProps {
  label?: string;
  color?: baseColor;
}

export const Alert = (props: AlertProps) => {
  const { label, color = 'primary' } = props;
  const [colorVal, setColor] = useBgAndTextColors(color);

  // React.useEffect(() => {
  //   setColor("bg-blue-500 text-white")
  // }, []);

  console.log(colorVal);
  return (
    <div
      className={colorVal + ` rounded-lg py-3 px-5 mb-3 text-base`}
      role={'alert'}
    >
      {label ??
        'Your browser is outdated! Your Taib experience may be degraded.'}
    </div>
  )
};

const useBgAndTextColors = (color: baseColor) => {
  const [colorVal, setColor] = React.useState<any>();
  React.useEffect(() => {
    setColor(() => SetColorWithBgAndText(color));
  }, [color]);

  return [colorVal, setColor];
};

export default Alert;
