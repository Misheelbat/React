import { useState } from 'react';
import { useServer } from '../../hooks/useServer';

export default function TransactionForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addItem, error } = useServer();

  const handleSubmit = async e => {
    e.preventDefault();
    await addItem(name, Number(amount));
    setName('');
    setAmount('');
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount (€):</span>
          <input
            type="number"
            required
            onChange={e => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
      {error && <div>{error}</div>}
    </>
  );
}
