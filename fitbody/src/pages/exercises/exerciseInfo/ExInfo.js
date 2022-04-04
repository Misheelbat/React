import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import './ExInfo.css';

export default function ExInfo() {
	const { subCat } = useSelector((state) => state.category);
	console.log(subCat);
	let Background ={
		
	}
	return <div></div>;
}
