import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
	const [navToggle, setNavToggle] = useState(false);

	return (
		<header className="flex">
			<div className="nav-logo">
				<img src="/assets/shared/logo.svg" alt="site logo" />
			</div>
			<button
				className="m-nav-toggle"
				aria-controls="nav-links"
				onClick={() => setNavToggle(!navToggle)}
			>
				<img
					className="nav-button"
					src="/assets/shared/icon-hamburger.svg"
					alt="nav button"
				/>
			</button>
			<nav>
				<ul className="nav-links flex hover-underline text-white uppercase ">
					<li>
						<NavLink to="/">
							<span>01</span>Home
						</NavLink>
					</li>
					<li>
						<NavLink to="destination">
							<span>02</span>Destination
						</NavLink>
					</li>
					<li>
						<NavLink to="crew">
							<span>03</span>Crew
						</NavLink>
					</li>
					<li>
						<NavLink to="tech">
							<span>04</span>Technology
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
