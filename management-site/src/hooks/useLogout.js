import { useState, useEffect } from "react";
import { proAuth, proFire } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setisCancelled] = useState(false);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    //sign the user out
    try {
      // update online status
      const { uid } = user;
      await proFire.collection("users").doc(uid).update({ online: false });

      await proAuth.signOut();
      //dispatch logout action
      dispatch({ type: "LOGOUT" });
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

  return { logout, error, isPending };
};
