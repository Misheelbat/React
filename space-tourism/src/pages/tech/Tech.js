import React, { useEffect, useState } from 'react';
import Data from '../../data.json';
import { useBgContext } from '../../context/BgContext';
//styles
import './Tech.css';

export default function Tech() {
	const [selectedNumber, setSelectedNumber] = useState(0);
	const tech = Data.technology;

	const currentPage = useBgContext();
	useEffect(() => {
		currentPage.setPage('techPage');
	}, [currentPage]);
	return (
		<div className="tech-container flow">
			<h1 className="main-title tech-title text-white">
				<span>03</span>space launch 101
			</h1>
			<div className="number-indicators flex tech-nav">
				{tech.map((t, i) => (
					<button
						className={i === selectedNumber ? 'active' : ''}
						key={t.name}
						onClick={() => setSelectedNumber(i)}
					>
						{i + 1}
					</button>
				))}
			</div>
			<div className="tech-content text-white">
				<h2 className="tech-info">
					<span>the terminology...</span>
					{tech[selectedNumber].name}
				</h2>
				<p className="main-paragraph tech-desc text-blue">
					{tech[selectedNumber].description}
				</p>
			</div>
			<img
				className="tech-image"
				src={tech[selectedNumber].images.landscape}
				alt=""
			/>
			<img
				className="tech-image2"
				src={tech[selectedNumber].images.portrait}
				alt=""
			/>
		</div>
	);
}
