import React from 'react';
import './Card.css';

export default function Card({ name, imgSrc }) {
	return (
		<div className="card">
			<div className="card-img-container">
				<img src={imgSrc} alt={name} />
			</div>
			<p>{name}</p>
		</div>
	);
}
