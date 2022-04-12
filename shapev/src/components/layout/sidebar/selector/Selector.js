import React from 'react';

import styles from './Selector.module.css';
export default function Selector({ selectors }) {
	return (
		<div className={styles.selector}>
			{selectors &&
				selectors.map((selector) => {
					return (
						<div>
							<input type="radio" name="selectors" id={selector} />
							<label htmlFor={selector}>{selector}</label>
						</div>
					);
				})}
		</div>
	);
}
