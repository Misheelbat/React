import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
export default function Navbar() {
	return (
		<header>
			<nav className=" flex main-nav">
				<ul className="flex">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/routines">Routines</NavLink>
					</li>
					<li>
						<NavLink to="/programms">Programms</NavLink>
					</li>
					<li>
						<NavLink to="/exercises">Exercises</NavLink>
					</li>
				</ul>
				<div className="register">
					<NavLink to="/login">Log in</NavLink>
					<NavLink className="sign" to="/signup">
						Sign up
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
