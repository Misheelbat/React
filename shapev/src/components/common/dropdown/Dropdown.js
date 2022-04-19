import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectSubCategory } from 'features/category/categorySlice';

import cx from 'classnames';

import styles from './Dropdown.module.css';

export default function Dropdown({ split, dropData, title }) {
	const [active, setActive] = useState(dropData[0]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(selectSubCategory(active));
	}, [active]);
	return (
		<div>
			<h3 className={styles.title}>{title + ':'}</h3>
			<div className={styles.dropdown}>
				<div data-split={split} className={styles.itemGroup}>
					{dropData &&
						dropData.map((item) => (
							<p
								key={item.id}
								onClick={() => setActive(item)}
								className={cx(styles.item, {
									[styles.active]: active.id === item.id,
								})}
							>
								{item.name}
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
