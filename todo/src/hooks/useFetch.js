import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  
  
  useEffect(() => {
    const fetchData = async (fetchOption) => {
      const res = await fetch(url, { ...fetchOption });
      const json = await res.json();

      setData(json);
    };
   
      fetchData();
    
  }, [url]);
  return { data};
};
