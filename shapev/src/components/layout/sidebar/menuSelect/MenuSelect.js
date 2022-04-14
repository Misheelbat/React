import React from 'react';

import styles from './MenuSelect.module.css';
const drop = [
	'Arm',
	'Legs',
	'Chest',
	'Calves',
	'Shoulders',
	'Arm',
	'Legs',
	'Chest',
	'Calves',
	'Shoulders',
];
export default function MenuSelect() {
	return (
		<>
			<label htmlFor="category select" className={styles.title}>
				Muscles:
			</label>
			<select name="category" id="category select" className={styles.selector}>
				{drop.map((item) => (
					<option>{item}</option>
				))}
			</select>
		</>
	);
}
