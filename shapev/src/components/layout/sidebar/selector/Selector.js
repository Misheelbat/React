import React from 'react';

import styles from './Selector.module.css';
export default function Selector({ selectors }) {
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className={styles.selector} onChange={handleChange}>
			{selectors &&
				selectors.map((selector, i) => {
					return (
						<div key={selector}>
							<input
								type="radio"
								value={selector}
								name="selectors"
								id={selector}
							/>
							<label htmlFor={selector}>{selector}</label>
						</div>
					);
				})}
		</div>
	);
}
