import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_APP } from '../utils/query';
import { useUserContext } from './useUserContext';

export const useLogin = () => {
  const [loginApp] = useMutation(LOGIN_APP);
  const { dispatch } = useUserContext();
  const [showErr, setshowErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, pass) => {
    setLoading(true);
    try {
      const { data } = await loginApp({
        variables: { loginInput: { email, password: pass } },
      });
      
      if (data) {
        dispatch({ type: 'LOGIN', payload: data.loginUser.token });
      }

      setLoading(false);
      return data.loginUser.token;
    } catch (err) {
      setLoading(false);
      setshowErr(err.message);
    }
  };
  return { login, showErr, loading };
};
