import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  return (
    <ul className={styles.transactions}>
      {transactions.map((doc) => (
        <li key={doc.id}>
          <p className={styles.name}>{doc.name}</p>
          <p className={styles.amount}>€{doc.amount}</p>
          <button onClick={() => deleteDocument(doc.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
