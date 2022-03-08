import { UserContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('outside provider');
  }
  return context;
};
