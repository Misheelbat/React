import { useCollection } from '../../hooks/useCollection';
import { useDelete } from '../../hooks/useDelete';
import styles from './Home.module.css';

export default function TransactionList() {
  const { data, error } = useCollection();
  const { deleteTransaction, error: err } = useDelete();

  const handleDelete = async id => {
    await deleteTransaction(id);
  };
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ul className={styles.transactions}>
      {data.allTransaction.map(tr => (
        <li key={tr._id}>
          <p className={styles.name}>{tr.name}</p>
          <p className={styles.amount}>€ {tr.amount}</p>
          <button onClick={() => handleDelete(tr._id)}>X</button>
        </li>
      ))}
      {err && <div>{err.message}</div>}
    </ul>
  );
}
