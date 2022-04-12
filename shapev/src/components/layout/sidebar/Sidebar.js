import React from 'react';
import Selectors from './selector/Selector';

import styles from './Sidebar.module.css';

const selectors = ['Muscle', 'Body', 'Equipment'];
export default function Sidebar({ children }) {
	return (
		<aside className={styles.containerSide}>
			<Selectors selectors={selectors} />
			{children}
		</aside>
	);
}
