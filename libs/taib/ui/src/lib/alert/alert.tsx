import React, { ReactNode } from 'react';
import { useControllableColor } from '../hooks/useControllableColors';
import { IconXMark } from '../icons';
import { baseColor, SetColorWithBgAndText } from '../utils/colors';

/* eslint-disable-next-line */
export interface AlertProps {
  label?: string;
  color?: baseColor;
  icon?: ReactNode;
  isClose?: boolean; 
  onCloseFn?():void;
}

export const Alert = (props: AlertProps) => {
  const { label, color = 'primary',icon,isClose } = props;
  const [colorVal, setColor] = useBgAndTextColors(color);
  const aa = useControllableColor({ type: 'border-b', color: 'primary' });
  React.useEffect(() => {
    console.log('hook---',aa);
  }, []);

  console.log(aa);
  return (
    <div
      className={colorVal + ` relative flex justify-between items-center rounded-lg py-3 pl-5 mr-0 pr-0 mb-3 text-base`}
      role={'alert'}
    >
      {icon ? icon : null}
      {label ? (
        <span className="px-1 flex-1">{label}</span>
      ) : (
        <span>Your browser is outdated! Your Taib experience may be degraded.the val is --${aa.clsVal}</span>
      )}
      {isClose ? (
        <div className="ml-2 p-3 relative right-1 -top-3 cursor-pointer hover:ring-1" onClick={props.onCloseFn}><IconXMark  /></div>
      ) : null}
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
