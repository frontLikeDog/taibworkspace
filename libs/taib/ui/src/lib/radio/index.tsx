import { RadioProps } from "./radio";
import Group from './radio-group';
import InternalRadio from './radio'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;
Radio.Group = Group;
export default Radio;