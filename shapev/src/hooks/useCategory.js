import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const getData = async (URL) => {
	const res = await axios.get(URL);
	const data = res.data;
	return data;
};

export const useCategory = () => {
	const { mainCat } = useSelector((state) => state.category);
	let category = '';
	switch (mainCat) {
		case 'Muscle':
			category = 'muscle';
			break;
		case 'Equipment':
			category = 'equipment';
			break;
		case 'Body':
			category = 'exercisecategory';
			break;
		default:
			break;
	}
	const URL = `https://wger.de/api/v2/${category}`;

	const query = useQuery(['main', mainCat], () => getData(URL), {
		refetchOnWindowFocus: false,
		enabled: Boolean(mainCat),
		staleTime: Infinity,
	});

	return query;
};
