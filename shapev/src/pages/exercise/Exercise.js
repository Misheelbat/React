import React from 'react';

import Main from '../../components/layout/mainContent/Main';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Card from './card/Card';
import Dropdown from './../../components/layout/sidebar/dropdown/Dropdown';

import styles from './Exercise.module.css';

export default function Exercise() {
	return (
		<>
			<Main>
				<div className={styles.mainHeader}>
					<h1>Workouts</h1>
					<p>9 out of 27</p>
				</div>
				<div className={styles.mainContent}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</Main>
			<Sidebar>
				<Dropdown />
			</Sidebar>
		</>
	);
}
