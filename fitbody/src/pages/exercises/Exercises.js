import React from 'react';

// Components
import Scrollbar from '../../components/scrollbar/Scrollbar';
import Card from '../../components/card/Card';
import Sidebar from '../../components/sidebar/Sidebar';

// styles
import './Exercises.css';
import scrollbarStyle from '../../components/scrollbar/Category.module.css';
import sidebarStyle from '../../components/sidebar/SidebarHome.module.css';

const muscles = 'https://wger.de/api/v2/muscle/';
const equipment = 'https://wger.de/api/v2/equipment/';
const bodyPart = 'https://wger.de/api/v2/exercisecategory/';

export default function Exercises() {
	return (
		<section className="exercise">
			<Sidebar styles={sidebarStyle} />
			<main className="ex-content">
				<div className="flow ex-container">
					<div className="flex searchbar">
						<input className="search-input" type="text" placeholder="Search" />
						<p>Welcome</p>
					</div>
					<h1>Explore our Exercises</h1>
					<div>
						<p className="select-category">Please select a category</p>
						<div className="ex-card-container">
							<Card
								api={muscles}
								name="Muscle groups"
								imgSrc="./images/muscle.png"
							/>
							<Card
								api={bodyPart}
								name="Body parts"
								imgSrc="./images/body.png"
							/>
							<Card
								api={equipment}
								name="Equipments"
								imgSrc="./images/equipment.png"
							/>
						</div>
					</div>
					{/* <Scrollbar data={data} styles={scrollbarStyle} /> */}
				</div>
			</main>
		</section>
	);
}
