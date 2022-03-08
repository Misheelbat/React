import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useInfo } from '../../hooks/useInfo';
import { useNavigate } from 'react-router-dom';

// styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const { signUp, loading, error } = useSignup();
  const { getUser } = useInfo();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signUp(email, name, pass);
    if (token) {
      await getUser(token);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={e => setPass(e.target.value)}
          value={pass}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      {!loading && <button className="btn">Signup</button>}

      {loading && (
        <button className="btn" disabled>
          loading
        </button>
      )}

      {error && <p>{error.message}</p>}
    </form>
  );
}
