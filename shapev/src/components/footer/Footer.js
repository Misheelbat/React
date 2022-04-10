import React from 'react';
import {
	MdKeyboardArrowLeft as Left,
	MdKeyboardArrowLeft as Right,
} from 'react-icons/md';

import styles from './Footer.module.css';
export default function Footer({ isDisabled }) {
	return (
		<footer className={styles.footerBtn}>
			<button disabled={isDisabled} className={styles.left}></button>
			<button disabled={isDisabled} className={styles.right}></button>
		</footer>
	);
}
