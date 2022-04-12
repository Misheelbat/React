import React from 'react';

import Navbar from '../navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';

import styles from './Layout.module.css';

export default function Content({ children }) {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.content}>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
}
