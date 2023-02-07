import styles from './zippy.module.css';

/* eslint-disable-next-line */
export interface ZippyProps {}

export function Zippy(props: ZippyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Zippy!</h1>
    </div>
  );
}

export default Zippy;
