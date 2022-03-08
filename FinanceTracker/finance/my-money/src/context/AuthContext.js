import { createContext, useReducer } from 'react';

export const UserContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };
    case 'GET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    token: null,
    user: null,
  });
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
