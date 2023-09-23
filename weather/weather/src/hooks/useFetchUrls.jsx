
import { useEffect, useState } from 'react';

const useFetchUrls = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error(response.status);
          return await response.json();
        });
        const results = await Promise.all(promises);
        setData(results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [urls]);

  return { data, loading, error };
};

export default useFetchUrls;
