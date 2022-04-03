import { useQuery } from 'react-query';
import axios from 'axios';

export const getData = async (URL) => {
	const res = await axios.get(URL);
	const data = res.data;
	return data;
};
export const useSubCategory = (obj) => {
	let URL = '';
	switch (obj.category) {
		case 'muscle':
			URL = `https://wger.de/api/v2/exercise/?language=2&muscles=${obj.subCategory}`;
			break;
		case 'equipment':
			URL = `https://wger.de/api/v2/exercise/?language=2&equipment=${obj.subCategory}`;
			break;
		case 'exercisecategory':
			URL = `https://wger.de/api/v2/exercise/?language=2&category=${obj.subCategory}`;
			break;
		default:
			break;
	}

	const query = useQuery([obj.category, obj.subCategory], () => getData(URL), {
		refetchOnWindowFocus: false,
		enabled: Boolean(obj.subCategory),
		staleTime: Infinity,
	});
	return query;
};
