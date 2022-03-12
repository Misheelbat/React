import React, { useEffect, useState } from 'react';
import Data from '../../data.json';
import { useBgContext } from '../../context/BgContext';

//styles
import './Crew.css';

export default function Crew() {
	const [selectedDot, setSelectedDot] = useState(0);

	const crew = Data.crew;
	const currentPage = useBgContext();
	console.log(crew);

	useEffect(() => {
		currentPage.setPage('crew');
	}, [currentPage.page]);

	return (
		<div className="text-white crew-container">
			<div>
				<h1 className="main-title crew-title text-white">
					<span>02</span>meet your crew
				</h1>

				<h2 className="crew-role">
					<span>{crew[selectedDot].role}</span>
					{crew[selectedDot].name}
				</h2>

				<p className="main-paragraph text-blue">{crew[selectedDot].bio}</p>

				<div className="dot-indicators">
					{crew.map((person, i) => (
						<button
							className={i === selectedDot ? 'active' : 0}
							key={person.name}
							onClick={() => setSelectedDot(i)}
						></button>
					))}
				</div>
			</div>

			<img className="crew-image" src={crew[selectedDot].images.png} alt="" />
		</div>
	);
}
