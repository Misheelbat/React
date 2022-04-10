import React from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Card from './card/Card';
import Main from '../../components/pageMain/Main';

import styles from './Exercise.module.css';
export default function Exercise() {
	return (
		<>
			<Main>
				<div className={styles.mainContent}>
					<div className={styles.mainHeader}>
						<h1>Workouts</h1>
						<p>9 out of 27</p>
					</div>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</Main>
			<Sidebar>sidebar</Sidebar>
		</>
	);
}
