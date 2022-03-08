import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/useLogin';
import { useInfo } from '../../hooks/useInfo';
// styles
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { login, showErr, loading } = useLogin();
  const { getUser } = useInfo();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await login(email, pass);
    if (token) {
      await getUser(token);
      setEmail('');
      setPass('');
      navigate('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login</h2>
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
        {!loading && <button className="btn">Login</button>}

        {loading && (
          <button className="btn" disabled>
            loading
          </button>
        )}
        {showErr && <p>{showErr}</p>}
      </form>
    </div>
  );
}
