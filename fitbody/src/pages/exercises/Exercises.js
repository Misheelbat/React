import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Scrollbar from '../../components/scrollbar/Scrollbar';
import Card from '../../components/card/Card';

// styles
import './Exercises.css';
import styles from './Category.module.css';

const muscles = [
	'Abs',
	'Arms',
	'Back',
	'Calves',
	'Chest',
	'Legs',
	'Shoulders',
	'Head',
	'Ankles',
	'Biceps',
];

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
			<main className="ex-content flow">
				<div className="flex searchbar">
					<input className="search-input" type="text" placeholder="Search" />
					<p>Welcome</p>
				</div>
				<h1>Explore our Exercises</h1>
				<div>
					<p className="select-category">Please select a category</p>
					<div className="ex-card-container">
						<Card name="Muscle groups" imgSrc="./images/muscle.png" />
						<Card name="Body parts" imgSrc="./images/body.png" />
						<Card name="Equipments" imgSrc="./images/equipment.png" />
					</div>
				</div>
				<Scrollbar data={muscles} styles={styles} />
			</main>
		</section>
	);
}
