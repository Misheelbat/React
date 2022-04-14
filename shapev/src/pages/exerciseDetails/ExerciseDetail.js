import React from 'react';

import Main from '../../components/layout/mainContent/Main';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Button from '../../components/button/Button';
import Tags from './tags/Tags';

import styles from './ExerciseDetail.module.css';
const dummyItems = ['Tags', 'Tags', 'Tags'];
export default function ExerciseDetail() {
	return (
		<>
			<Main>
				<Button>add me</Button>
				<div className={styles.details}>
					<h1>Bench Press</h1>
					<div className={styles.category}>
						<p>Category:</p>
						<Tags items={dummyItems} />
					</div>
					<div className={styles.muscles}>
						<p>Muscles:</p>
						<Tags items={dummyItems} />
					</div>
					<div className={styles.illust}>
						<img src="/images/card/card_img.png" />
					</div>
					<div className={styles.desc}>
						<h2>Description:</h2>
						<p>
							Lay down on a bench, the bar is directly over your eyes, the knees
							form a slight angle and the feet are firmly on the ground. Hold
							the bar with a narrow grip (around 20cm.). Lead the weight slowly
							down till the arms are parallel to the floor (elbow: right angle),
							press then the bar up. When bringing the bar down, don't let it
							down on your nipples as with the regular bench pressing, but
							somewhat lower.
						</p>
					</div>
					<div className={styles.images}>
						<img src="/images/muscles/front.svg" />
						<img src="/images/muscles/back.svg" />
					</div>
					<div className={styles.variatons}>
						<p>Variations:</p>
						<ul>
							<li>Shoulder Press</li>
							<li>Bench Press</li>
							<li>Dumbbell Press</li>
						</ul>
					</div>
				</div>
			</Main>
			<Sidebar></Sidebar>
		</>
	);
}
