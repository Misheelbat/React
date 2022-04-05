import React from 'react';
import { useSelector } from 'react-redux';
import { useSubCategory } from '../../../hooks/useSubCategory';
import setBg from '../../../utils/bgStyler';

// Styles
import './ExInfo.css';

export default function ExInfo() {
	const { mainCat, subCat } = useSelector((state) => state.category);
	const data = useSubCategory(subCat);
	console.log(subCat);

	const BG = setBg(subCat);
	return (
		<div className="info-container">
			<div className="muscles" style={BG}></div>
		</div>
	);
}
