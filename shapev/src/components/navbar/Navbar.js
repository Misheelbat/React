import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

import styles from './Navbar.module.css';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav data-menuOpen={menuOpen} className={styles.navbar}>
			<button onClick={() => setMenuOpen(!menuOpen)} className={styles.menu}>
				{menuOpen ? <HiX /> : <HiMenu />}
			</button>
			<ul className={styles.navLinks}>
				<li>
					<NavLink to="/">
						<img src="/images/home.svg" alt="homepage" />
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/exercises">
						<img src="/images/exercise.svg" alt="exercise page" />
						<span>Exercises</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/routines">
						<img src="/images/routine.svg" alt="routine page" />
						<span>Routine</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/programms">
						<img src="/images/prog.svg" alt="programm page" />
						<span>Programms</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
