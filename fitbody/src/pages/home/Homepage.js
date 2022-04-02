import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

import './Homepage.css';

export default function Homepage() {
	return (
		<main className="homeMain">
			<Navbar />
			<section className="homeContent flow">
				<h1>Create your habit</h1>
				<p>
					If you believe you can change - if you make it a habit - the change
					becomes real.
				</p>
				<Link className="startNow" to="signup">
					Start now
				</Link>
			</section>
		</main>
	);
}
