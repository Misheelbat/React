import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

export const BgContextProvider = ({ children }) => {
	const [page, setPage] = useState('');
	return (
		<BackgroundContext.Provider value={{ page, setPage }}>
			{children}
		</BackgroundContext.Provider>
	);
};

export const useBgContext = () => {
	const context = useContext(BackgroundContext);
	if (!context) {
		throw new Error('outside provider');
	}
	return context;
};
