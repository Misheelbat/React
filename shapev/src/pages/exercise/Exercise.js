import React from 'react';
import { useCategory } from 'hooks/useCategory';
import { useSelector, useDispatch } from 'react-redux';
import { useSubCategory } from 'hooks/useSubCategory';

import Main from 'components/layout/mainContent/Main';
import Sidebar from 'components/layout/sidebar/Sidebar';
import Card from 'components/common/card/Card';
import Dropdown from 'components/common/dropdown/Dropdown';
import Selectors from 'components/common/selector/Selector';

import styles from './Exercise.module.css';
const selectors = ['Muscle', 'Body', 'Equipment'];

export default function Exercise() {
	const { mainCat, subCat } = useSelector((state) => state.category);
	const { data } = useCategory();
	const query = useSubCategory();

	return (
		<>
			<Main>
				<div className={styles.mainHeader}>
					<h1>Workouts</h1>
					<p>9 out of 27</p>
				</div>
				{query.data && (
					<div className={styles.mainContent}>
						{query.data.results.map((card) => (
							<Card />
						))}
					</div>
				)}
			</Main>
			<Sidebar>
				<Selectors selectors={selectors} />
				{data && (
					<Dropdown title={mainCat} dropData={data.results} split={true} />
				)}
			</Sidebar>
		</>
	);
}
