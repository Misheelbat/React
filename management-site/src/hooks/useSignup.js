import { useState, useEffect } from "react";
import { proAuth} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setisCancelled] = useState(false);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      // sign up
      const res = await proAuth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("could not complete signup");
      }

      //add display name to user
      await res.user.updateProfile({ displayName: displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setisCancelled(true);
  }, []);

  return { error, isPending, signup };
};
