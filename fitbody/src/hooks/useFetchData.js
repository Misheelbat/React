import React, { useState } from 'react';
import { useQuery } from 'react-query';

export const getData = async (api) => {
	const res = await fetch(api);
	return await res.json();
};
export const useFetchData = (api) => {
	return useQuery(['api', api], () => getData(api), {
		refetchOnWindowFocus: false,
		enabled: false,
	});
};
