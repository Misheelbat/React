import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';

import styles from './Layout.module.css';

export default function Content({ children }) {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.content}>
				<section>this is user</section>
				{children}
			</div>
		</div>
	);
}
