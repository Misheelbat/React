import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useCollection = () => {
  const { token, user } = useUserContext();
  const { data, error } = useQuery(TRANSACTIONS, {
    variables: { id: user.user_id },
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  return { data, error };
};
