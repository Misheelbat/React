import { useMutation } from '@apollo/client';
import { SIGN_USER } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useSignup = () => {
  const [createUser, { loading, error }] = useMutation(SIGN_USER);
  const { dispatch } = useUserContext();

  const signUp = async (email, name, pass) => {
    try {
      const { data } = await createUser({
        variables: { registerInput: { email, name, password: pass } },
      });
      if (data) {
        dispatch({ type: 'LOGIN', payload: data.registerUser.token });
      }
      return data.registerUser.token;
    } catch (err) {
      console.log('signup error', err.message);
    }
  };
  return { signUp, loading, error };
};
