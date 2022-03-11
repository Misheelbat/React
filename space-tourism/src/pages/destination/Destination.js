import React from 'react';
import Data from '../../data.json';
//styles
import './Destination.css';

export default function Destination() {
	const des = Data.destinations;
	console.log(des);

	return (
		<section className="des-container">
			<div className="destination-left text-white">
				<h1 className="main-title dest-title">
					<span>01</span>
					pick your destination
				</h1>
				<div className="dest-image">
					<img src={des[0].images.png} alt="" />
				</div>
			</div>
			<div className="destination-right text-blue">
				<div className="dest-nav">
					{des.map(d => (
						<button key={d.name}>{d.name}</button>
					))}
				</div>
				<h2 className="dest-name">{des[0].name}</h2>
				<p className="main-paragraph">{des[0].description}</p>
				<div className="dest-footer">
					<div className="dest-info">
						<p>Avg. distance</p>
						<p>{des[0].distance}</p>
					</div>
					<div className="dest-info">
						<p>Est. travel time</p>
						<p>{des[0].travel}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
