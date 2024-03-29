import { useState, useEffect } from "react";
import { proAuth, proFire } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setisCancelled] = useState(false);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //sign the user in
    try {
      const res = await proAuth.signInWithEmailAndPassword(email, password);

      //update online status

      await proFire
        .collection("users")
        .doc(res.user.uid)
        .update({ online: true });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        isPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setisCancelled(true);
  }, []);

  return { login, error, isPending };
};
