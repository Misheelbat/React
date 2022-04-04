import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainCategory } from '../features/category/categorySlice';
// Hooks

// Styles
import './Card.css';

export default function Card({ name, imgSrc, api }) {
	const { mainCat } = useSelector((state) => state.category);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(selectMainCategory(api));
	};

	return (
		<div
			className={mainCat === api ? 'card cActive' : 'card'}
			onClick={handleClick}
		>
			<div className="card-img-container">
				<img src={imgSrc} alt={name} />
			</div>
			<p>{name}</p>
		</div>
	);
}
