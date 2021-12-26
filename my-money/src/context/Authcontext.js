import { createContext, useReducer } from "react";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authreducer, { user: null });
  return <Authcontext.Provider>{children}</Authcontext.Provider>;
};
