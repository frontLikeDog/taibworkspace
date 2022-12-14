import styles from './form-control.module.css';

/* eslint-disable-next-line */
export interface FormControlProps {}

export function FormControl(props: FormControlProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormControl!</h1>
    </div>
  );
}

export default FormControl;
