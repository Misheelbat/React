import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';

export default function Homepage() {
	return (
		<main className="home-main">
			<section className="home-content flow">
				<h1>Create your habit</h1>
				<p>
					If you believe you can change - if you make it a habit - the change
					becomes real.
				</p>
				<Link className='start-now' to="signup">Start now</Link>
			</section>
		</main>
	);
}
