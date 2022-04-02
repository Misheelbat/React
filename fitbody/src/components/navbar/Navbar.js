import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt4 as Menu, HiOutlineX as Close } from 'react-icons/hi';

import './Navbar.css';

export default function Navbar() {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<header>
			<div onClick={() => setMenuToggle(!menuToggle)}>
				{menuToggle ? (
					<Close className="menu open" />
				) : (
					<Menu className="menu closed" />
				)}
			</div>
			<nav className="flex mainNav">
				<ul aria-expanded={menuToggle} className="flex navLinks">
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
					<NavLink className="login" to="/login">
						Log in
					</NavLink>
					<NavLink className="sign" to="/signup">
						Sign up
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
