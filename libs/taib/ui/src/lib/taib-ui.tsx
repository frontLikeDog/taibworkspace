import styles from './taib-ui.module.css';

/* eslint-disable-next-line */
export interface TaibUiProps {}

export function TaibUi(props: TaibUiProps) {
  return (
    <div className={styles['container']}>
      <h1 className="text-blue bg-gray-500 p-4 text-primary">Welcome to TaibUi!</h1>
    </div>
  );
}

export default TaibUi;
