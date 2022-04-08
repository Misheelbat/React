import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
export default function Navbar() {
	const [expanded, setExpanded] = useState(false);
	const handleClick = () => {
		console.log(expanded);
		setExpanded(!expanded);
	};
	return (
		<nav
			data-expanded={expanded}
			className={styles.navbar}
			onClick={handleClick}
		>
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
