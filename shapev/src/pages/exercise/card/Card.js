import React from 'react';
import Button from '../../../components/button/Button';

import styles from './Card.module.css';

export default function Card() {
	return (
		<div className={styles.card}>
			Card
			<Button>Read More</Button>
		</div>
	);
}
