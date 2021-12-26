import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
