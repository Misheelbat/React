import React from 'react';
import Button from 'components/common/button/Button';

import styles from './Card.module.css';

export default function Card({ img, category, equipment }) {
	return (
		<article className={styles.card}>
			<img
				className={styles.cardExerciseImg}
				src="/images/card/card_img.png"
				alt="exercise"
			/>
			<div className={styles.cardInfo}>
				<div>
					<div className={styles.cardItems}>
						<img src="/images/card/card_cat.svg" alt="card category" />
						<p>Chest</p>
					</div>
					<div className={styles.cardItems}>
						<img src="/images/card/card_eq.svg" alt="card equipments" />
						<p>Barbell, Bench</p>
					</div>
				</div>
				<Button>Read More</Button>
			</div>
		</article>
	);
}
