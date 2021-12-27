import { proFire } from "../firebase/config";
import { useEffect, useState } from "react";
import Trashcan from "../assets/trashcan.svg";
import { useTest } from "../hooks/useTestContext";
import "./TodoList.css";

export default function TodoList() {
  const [data, setData] = useState(null);
  const { test, changeTest, mode } = useTest();

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
    <div >
      {data &&
        data.map((e) => (
          <div
            key={e.id}
            style={{ background: test }}
            onClick={() => changeTest("none")}
          >
            {e.term} test: {test}
            <img src={Trashcan} onClick={() => handleDelete(e.id)} />
          </div>
        ))}
    </div>
  );
}
