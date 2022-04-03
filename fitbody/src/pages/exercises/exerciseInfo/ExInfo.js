import React from 'react';
import { useSubCategory } from '../../../hooks/useSubCategory';
import { useCardContext } from '../../../hooks/useCardContext';
import Card from '../../../components/card/Card';
// Styles
import './ExInfo.css';

export default function ExInfo() {
	const { selected } = useCardContext();
	const { data, isLoading } = useSubCategory(selected);
	const imgUrl = `wger.de/static/images/muscles/main/muscle-${selected.subCategory}.svg`;
	console.log(imgUrl);
	return <div>{/* <div className="muscles"></div> */}</div>;
}
