import styles from './checkbox.module.css';

export interface AbstractCheckboxProps<T> {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
}

/* eslint-disable-next-line */
export interface CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Checkbox!</h1>
    </div>
  );
}

export default Checkbox;
