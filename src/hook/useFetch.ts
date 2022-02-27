import { useState, useEffect } from "react";

const useFetch = (url : string, options : any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        setData(data);
      } catch (e : any) {
        setData([]);
        setError(e);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  return { data, error, isLoading };
}; 
export default useFetch;
