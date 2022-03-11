import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
	const [navToggle, setNavToggle] = useState(false);

	return (
		<header className="nav-header flex">
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
					src={
						navToggle
							? '/assets/shared/icon-close.svg'
							: '/assets/shared/icon-hamburger.svg'
					}
					alt="navigation dropdown button"
				/>
			</button>
			<nav>
				<ul
					id="nav-links"
					data-nav={navToggle}
					className="nav-links hover-underline"
				>
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
