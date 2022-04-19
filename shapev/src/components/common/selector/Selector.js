import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMainCategory } from 'features/category/categorySlice';

import styles from './Selector.module.css';
export default function Selector({ selectors }) {
	const { mainCat } = useSelector((state) => state.category);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		dispatch(selectMainCategory(e.target.value));
	};
	return (
		<div className={styles.selector}>
			{selectors &&
				selectors.map((selector, i) => {
					return (
						<div key={selector}>
							<input
								type="radio"
								value={selector}
								name="selectors"
								id={selector}
								checked={mainCat === selector ? true : false}
								onChange={handleChange}
							/>
							<label htmlFor={selector}>{selector}</label>
						</div>
					);
				})}
		</div>
	);
}
