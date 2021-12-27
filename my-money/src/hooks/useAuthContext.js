import { Authcontext } from "../context/Authcontext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(Authcontext);
  if (context === undefined) {
    throw new Error("out of scope useAuthContext");
  }

  return context;
};
