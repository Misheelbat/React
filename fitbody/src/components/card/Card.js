import React from 'react';

// Hooks
import { useCardContext } from '../../hooks/useCardContext';

// Styles
import './Card.css';

export default function Card({ name, imgSrc, api }) {
	const { selected, setSelected } = useCardContext();

	const handleClick = () => {
		setSelected({ category: api, subCategory: '' });
	};

	return (
		<div
			className={selected.category === api ? 'card cActive' : 'card'}
			onClick={handleClick}
		>
			<div className="card-img-container">
				<img src={imgSrc} alt={name} />
			</div>
			<p>{name}</p>
		</div>
	);
}
