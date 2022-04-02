import React, { useState } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import cx from 'classnames';

//styles
import './Card.css';

export default function Card({ name, imgSrc }) {
	const { selected, setSelected } = useCardContext();
	const handleClick = () => {
		console.log('clicked');
		setSelected(name);
	};

	return (
		<div
			className={selected === name ? 'card cActive' : 'card'}
			onClick={handleClick}
		>
			<div className="card-img-container">
				<img src={imgSrc} alt={name} />
			</div>
			<p>{name}</p>
		</div>
	);
}
