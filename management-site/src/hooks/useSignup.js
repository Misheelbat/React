import { useState, useEffect } from "react";
import { proAuth, proStorage, proFire } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setisCancelled] = useState(false);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);
    try {
      // sign up
      const res = await proAuth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("could not complete signup");
      }

      // upload user image
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await proStorage.ref(uploadPath).put(thumbnail);
      const imgURL = await img.ref.getDownloadURL();

      //add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgURL });

      // create user document
      await proFire
        .collection("users")
        .doc(res.user.uid)
        .set({ online: true, displayName, photoURL: imgURL });

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
