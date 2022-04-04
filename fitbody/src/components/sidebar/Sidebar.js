import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './SidebarHome.module.css';

export default function Sidebar() {
	return (
		<header>
			<nav className={styles.nav}>
				<img className={styles.logo} src="./images/icon.png" alt="site logo" />
				<ul className={cx(styles.navLinks, styles.flow)}>
					<li>
						<NavLink to="/">
							<img src="./images/home.png" alt="home icon"></img>
							<p>Home</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/routines">
							<img src="./images/routine.png" alt="routine icon"></img>
							<p>Routines</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/programms">
							<img src="./images/prog.png" alt="programm icon"></img>
							<p>Programms</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/exercises">
							<img src="./images/biceps.png" alt="biceps icon"></img>
							<p>Exercises</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
