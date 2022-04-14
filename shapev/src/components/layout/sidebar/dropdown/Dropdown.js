import React, { useState } from 'react';
import cx from 'classnames';

import styles from './Dropdown.module.css';
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
export default function Dropdown({ split }) {
	const [active, setActive] = useState(0);
	return (
		<div>
			<h3 className={styles.title}>Muscles:</h3>
			<div className={styles.dropdown}>
				<div data-split={split} className={styles.itemGroup}>
					{drop.map((item, i) => (
						<p
							key={i}
							onClick={() => setActive(i)}
							className={cx(styles.item, { [styles.active]: active === i })}
						>
							{item}
						</p>
					))}
				</div>
				{split && (
					<div className={styles.muscularSystemContainer}>
						<img src="/images/muscles/front.svg" alt="muscular system" />
					</div>
				)}
			</div>
		</div>
	);
}
