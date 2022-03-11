import React from 'react';

//styles
import './Home.css';

export default function Home() {
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
				<a className="btn-explore">Explore</a>
			</div>
		</main>
	);
}
