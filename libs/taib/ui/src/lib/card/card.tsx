import React from 'react';
import { CardImg } from './card-img';
import { Simple } from './card-simple';


export interface CardProps {
  type: keyof typeof lookup,
  ref: React.Ref<HTMLDivElement>
}

const lookup = {
  simple: Simple,
  img: CardImg
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { type="simple" } = props;
  const Component = lookup[type];
  return (
      <div ref={ref} className="flex justify-center">
        <Component {...props} />
      </div>
  );
});

export default Card;
