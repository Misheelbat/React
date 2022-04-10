import React from 'react';
import {
	MdKeyboardArrowLeft as Left,
	MdKeyboardArrowLeft as Right,
} from 'react-icons/md';

import styles from './Footer.module.css';
export default function Footer() {
	return (
		<footer className={styles.footerBtn}>
			<button className={styles.left}></button>
			<button className={styles.right}></button>
		</footer>
	);
}
