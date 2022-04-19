import React from 'react';

import styles from './Button.module.css';
export default function Button({ children, isDisabled }) {
	return (
		<button disabled={isDisabled} className={styles.btn}>
			{children}
		</button>
	);
}
