import React, { useEffect, useState } from 'react';
import Data from '../../data.json';
import { useBgContext } from '../../context/BgContext';

//styles
import './Destination.css';

export default function Destination() {
	const [selectedPlanet, setSelectedPlanet] = useState(0);
	const des = Data.destinations;
	const currentPage = useBgContext();

	useEffect(() => {
		currentPage.setPage('destinationPage');
	}, [currentPage.page]);

	return (
		<section className="des-container flow">
			<h1 className="main-title dest-title text-white">
				<span>01</span>pick your destination
			</h1>

			<img
				className="dest-image"
				src={des[selectedPlanet].images.png}
				alt="planet"
			/>

			<div className="dest-nav">
				{des.map((d, i) => (
					<button
						className={i === selectedPlanet ? 'active' : ''}
						key={d.name}
						onClick={() => setSelectedPlanet(i)}
					>
						{d.name}
					</button>
				))}
			</div>

			<div className="destination-right  text-blue">
				<h2 className="dest-name">{des[selectedPlanet].name}</h2>
				<p className="main-paragraph">{des[selectedPlanet].description}</p>
				<div className="dest-footer">
					<div className="dest-info">
						<p>Avg. distance</p>
						<p>{des[selectedPlanet].distance}</p>
					</div>
					<div className="dest-info">
						<p>Est. travel time</p>
						<p>{des[selectedPlanet].travel}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
