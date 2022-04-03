import React from 'react';

// Hooks
import { useCategory } from '../../hooks/useCategory';
import { useCardContext } from '../../hooks/useCardContext';

// Components
import Scrollbar from '../../components/scrollbar/Scrollbar';
import Card from '../../components/card/Card';
import Sidebar from '../../components/sidebar/Sidebar';
import ExInfo from './exerciseInfo/ExInfo';

// styles
import './Exercises.css';
import scrollbarStyle from '../../components/scrollbar/Category.module.css';
import sidebarStyle from '../../components/sidebar/SidebarHome.module.css';

export default function Exercises() {
	const { selected } = useCardContext();
	const { data } = useCategory(selected.category);

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
						<p className="select-category">Please select a category:</p>
						<div className="ex-card-container">
							<Card
								api="muscle"
								name="Muscle groups"
								imgSrc="./images/muscle.png"
							/>
							<Card
								api="exercisecategory"
								name="Body parts"
								imgSrc="./images/body.png"
							/>
							<Card
								api="equipment"
								name="Equipments"
								imgSrc="./images/equipment.png"
							/>
						</div>
					</div>
					<Scrollbar data={data?.results} styles={scrollbarStyle} />
					<ExInfo />
				</div>
			</main>
		</section>
	);
}
