import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useInfo = () => {
  const { dispatch } = useUserContext();
  const [userInfo] = useLazyQuery(GET_USER);

  const getUser = async token => {
    try {
      const response = await userInfo({
        context: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      });

      if (response.data) {
        dispatch({
          type: 'GET_USER',
          payload: response.data.currentUser,
        });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return { getUser };
};
