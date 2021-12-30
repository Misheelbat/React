import { proFire } from "../firebase/config";

import { useState, useEffect, useRef } from "react";
export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //if i dont use use ref because of dependacy array query
  // useEffect will be a infinite loop
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = proFire.collection(collection);
    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let res = [];
        snapshot.docs.forEach((doc) => {
          res.push({ ...doc.data(), id: doc.id });
        });
        // update state
        setDocument(res);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch data");
      }
    );
    //unsub on unmount
    return () => unsub();
  }, [collection, query, orderBy]);

  return { documents, error };
};
