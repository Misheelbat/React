import { useEffect, useState } from "react";
import { proFire } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data for doc
  useEffect(() => {
    const ref = proFire.collection(collection).doc(id);
    const unsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("Document does not exist");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get document");
      }
    );
    return () => unsub();
  }, [collection, id]);

  return { document, error };
};
