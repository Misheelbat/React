import { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
	const [selected, setSelected] = useState('');
	const value = { selected, setSelected };

	return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
