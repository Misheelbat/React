import React from 'react';
import styles from './Tags.module.css';
export default function Tags({ items }) {
	return (
		<div className={styles.tags}>
			{items &&
				items.map((item, i) => (
					<div key={i} className={styles.tag}>
						{item}
					</div>
				))}
		</div>
	);
}
