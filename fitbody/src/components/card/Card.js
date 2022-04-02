import React, { useState } from 'react';
import { useCardContext } from '../../hooks/useCardContext';
import { useFetchData } from '../../hooks/useFetchData';

//styles
import './Card.css';

export default function Card({ name, imgSrc, api }) {
	const { selected, setSelected } = useCardContext();
	const { data, refetch } = useFetchData(api);
	console.log(data);

	const handleClick = async () => {
		await refetch({ cancelRefetch: true });
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
