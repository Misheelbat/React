import React from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/pageMain/Main';

import styles from './HomePage.module.css';

export default function HomePage() {
	return (
		<>
			<Main>
				<h1>Homepage</h1>
			</Main>
			<Sidebar>sidebar</Sidebar>
		</>
	);
}
