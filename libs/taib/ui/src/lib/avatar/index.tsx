// export { default as Avatar} from './Avatar'
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { AvatarProprs } from './avatar';

import Avatars from "./avatar";
import { Group } from "./group";

export { AvatarProprs } from './avatar';
export { Group } from './group';

type CompoundedComponent = ForwardRefExoticComponent<
    AvatarProprs & RefAttributes<HTMLSpanElement>
> & {
  Group: typeof Group;
};

const Avatar = Avatars as CompoundedComponent;

Avatar.Group = Group;

export default Avatar;