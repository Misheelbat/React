import { CardContext } from '../context/cardContext';
import { useContext } from 'react';

export const useCardContext = () => {
	const context = useContext(CardContext);
	if (!context) {
		throw new Error('Card context must be used within CardContext Provider');
	}
	return context;
};
