import React from 'react';

import Navbar from 'components/navbar/Navbar';
import Header from 'components/layout/header/Header';
import Footer from 'components/layout/footer/Footer';

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
