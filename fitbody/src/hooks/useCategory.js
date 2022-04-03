import { useQuery } from 'react-query';
import axios from 'axios';

export const getData = async (URL) => {
	const res = await axios.get(URL);
	const data = res.data;
	return data;
};
export const useCategory = (api) => {
	const URL = `https://wger.de/api/v2/${api}`;
	const query = useQuery(['api', api], () => getData(URL), {
		refetchOnWindowFocus: false,
		enabled: Boolean(api),
		staleTime: Infinity,
	});
	return query;
};
