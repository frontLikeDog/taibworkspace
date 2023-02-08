import React from "react";
import { Base } from "./chips-base";
import { Sizing } from "./chips-sizing";

/* eslint-disable-next-line */
export interface ChipsProps {
  type?: keyof typeof ChipsLookup;
}

const ChipsLookup = {
  base: Base,
  sizing : Sizing
}

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (props, ref) => {
    const { type="base", ...rest} = props;
    const Component = ChipsLookup[type];
    return (
      <div className="flex flex-wrap justify-center space-x-2">
        <Component {...rest} />
      </div>
    )
  }
);

export default Chips;
