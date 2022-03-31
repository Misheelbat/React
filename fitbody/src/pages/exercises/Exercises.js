import React from 'react';
import { NavLink } from 'react-router-dom';

import './Exercises.css';
export default function Exercises() {
	return (
		<section className="exercise">
			<header>
				<nav className="ex-nav">
					<img id="logo" src="./images/icon.png" alt="site logo" />
					<ul className="ex-nav-links flow">
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
			<main className="ex-content">
				<div>
					<input type="text" placeholder="Search" />
					<p>Welcome</p>
				</div>
				<h1>Explore our Exercises</h1>
				<div>
					<p>Please select a category</p>
					<div>
						<div>Muscle</div>
						<div>Body</div>
						<div>Equipment</div>
					</div>
				</div>
			</main>
		</section>
	);
}
