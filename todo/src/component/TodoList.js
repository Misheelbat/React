import { proFire } from "../firebase/config";
import { useEffect, useState } from "react";
import Trashcan from "../assets/trashcan.svg";

export default function TodoList() {
  const [data, setData] = useState(null);

  // fetch data from server using costum hook
  useEffect(() => {
    const unsub = proFire.collection("todo").onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => unsub();
  }, []);

  const handleDelete = (id) => {
    proFire.collection("todo").doc(id).delete();
  };

  return (
    <div>
      {data &&
        data.map((e) => (
          <div key={e.id}>
            {e.term} id: {e.id}
            <img src={Trashcan} onClick={() => handleDelete(e.id)} />
          </div>
        ))}
    </div>
  );
}
