import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBgContext } from '../../context/BgContext';

//styles
import './Home.css';

export default function Home() {
	const currentPage = useBgContext();

	useEffect(() => {
		currentPage.setPage('homePage');
	}, [currentPage]);

	return (
		<main role="main" className="home-container">
			<div className="home-content">
				<h1 className="main-title home-title">
					So, you want to travel to <span className="space">space</span>
				</h1>
				<p className="main-paragraph">
					Let's face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we'll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				<Link to="/destination" className="btn-explore">
					Explore
				</Link>
			</div>
		</main>
	);
}
