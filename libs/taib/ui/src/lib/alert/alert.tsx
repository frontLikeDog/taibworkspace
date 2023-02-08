import React from "react";
import { baseColor } from "../utils/colors";

/* eslint-disable-next-line */
export interface AlertProps {
  label?: string;
  color?: baseColor
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { label } = props;
    return (
      <div ref={ref} className="bg-blue-100 rounded-lg py-3 px-5 mb-3 text-base text-blue-700" role={"alert"}>
        { label !== undefined ? label : ('Your browser is outdated! Your Taib experience may be degraded.')}
      </div>
    );
  }
);

export default Alert;
