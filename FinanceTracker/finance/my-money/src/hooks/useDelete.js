import { useMutation } from '@apollo/client';
import { DELETE_T } from '../utils/query';
import { TRANSACTIONS } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useDelete = () => {
  const [deleteItem, { error }] = useMutation(DELETE_T);
  const { token } = useUserContext();

  const deleteTransaction = async id => {
    await deleteItem({
      variables: { id },
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      refetchQueries: [TRANSACTIONS, 'AllTransaction'],
    });
  };

  return { deleteTransaction, error };
};
