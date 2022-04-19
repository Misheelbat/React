import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const getData = async (URL) => {
	const res = await axios.get(URL);
	const data = res.data;
	return data;
};

export const useSubCategory = () => {
	const { subCat, mainCat } = useSelector((state) => state.category);
	let URL = '';
	switch (mainCat) {
		case 'Muscle':
			URL = `https://wger.de/api/v2/exercise/?language=2&muscles=${subCat.id}`;
			break;
		case 'Equipment':
			URL = `https://wger.de/api/v2/exercise/?language=2&equipment=${subCat.id}`;
			break;
		case 'Body':
			URL = `https://wger.de/api/v2/exercise/?language=2&category=${subCat.id}`;
			break;
		default:
			break;
	}

	const query = useQuery(['sub', subCat.name], () => getData(URL), {
		refetchOnWindowFocus: false,
		enabled: Boolean(subCat.name),
		staleTime: Infinity,
	});
	return query;
};
