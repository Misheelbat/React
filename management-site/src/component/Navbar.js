import "./Navbar.css";
import { Link } from "react-router-dom";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="navbar img" />
          <span>The Dojo </span>
        </li>
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
          <li>
            {!isPending && (
              <button onClick={logout} className="btn">
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
