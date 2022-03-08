import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_ITEM, TRANSACTIONS } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useServer = () => {
  const [error, setError] = useState(null);
  const [createIem] = useMutation(ADD_ITEM);
  const { token } = useUserContext();
  
  const addItem = async (name, amount) => {
    try {
      await createIem({
        variables: { transactionInput: { name, amount } },
        context: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
        refetchQueries: [TRANSACTIONS, 'AllTransaction'],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return { addItem, error };
};
