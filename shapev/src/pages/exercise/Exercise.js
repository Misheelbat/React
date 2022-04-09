import React from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Card from './card/Card';
import Main from '../../components/pageMain/Main';

import './Exercise.css';
export default function Exercise() {
	return (
		<>
			<Main>
				<div className="ex-main">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</Main>
			<Sidebar>sidebar</Sidebar>
		</>
	);
}
