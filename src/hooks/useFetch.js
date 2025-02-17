import { useState } from "react";

const API = "https://api.spacexdata.com/v3/launches/";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetchData = async (offset, limit) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches?offset=${offset}&limit=${limit}`
      );
      const result = await response.json();
      if (result.length != 0) setData((prevData) => [...prevData, ...result]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, data, error, fetchData };
};

export { useFetch };
