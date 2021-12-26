import { useState } from "react";
import { proAuth, proFire } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {

      // sign up
      const res = await proAuth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      if (!res) {
        throw new Error("could not complete signup");
      }

      //add display name to user
      await res.user.updateProfile({ displayName: displayName });
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
