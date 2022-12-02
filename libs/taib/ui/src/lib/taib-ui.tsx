import styles from './taib-ui.module.css';

/* eslint-disable-next-line */
export interface TaibUiProps {}

export function TaibUi(props: TaibUiProps) {
  return (
    <div className={styles['container']}>
      <h1 className='text-red-600'>Welcome to TaibUi!</h1>
    </div>
  );
}

export default TaibUi;
