import { createContext, useReducer, useEffect } from "react";
import { proAuth } from "../firebase/config";

export const Authcontext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = proAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);
  return (
    <Authcontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Authcontext.Provider>
  );
};
