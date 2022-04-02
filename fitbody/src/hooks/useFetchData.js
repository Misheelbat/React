import React, { useState } from 'react';
import { useQuery } from 'react-query';


const muscles = 'https://wger.de/api/v2/muscle/';
const equipment = 'https://wger.de/api/v2/equipment/';
const bodyPart = 'https://wger.de/api/v2/exercisecategory/';

export const useFetchData = () => {
	const getData = async (api) => {
		const res = await fetch(api);
		return await res.json();
	};

	return;
};
