import React from 'react';

import styles from './Header.module.css';
export default function Header() {
	return (
		<header className={styles.header}>
			<p>Nikola Tesla</p>
			<img src="/images/logo.png" alt="user" />
		</header>
	);
}
