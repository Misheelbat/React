
// styles
import styles from './Home.module.css';
// component
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

export default function Home() {
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TransactionList />
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}
