import CheckboxGroup from "./checkbox-group";
import Checkbox from "./checkbox";

import type { CheckboxProps } from "./checkbox";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLElement>> {
  Group: typeof CheckboxGroup;
}

const CheckboxInternal = Checkbox as CompoundedComponent;
CheckboxInternal.Group = CheckboxGroup;

export default CheckboxInternal;