import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user, dispatch } = useUserContext();
  const Logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney App</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>hello, {user.name}</li>
            <li>
              <button className="btn" onClick={Logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
