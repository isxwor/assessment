import { useCallback, useEffect, useState } from 'react';

const fetchCache = new Map();

export const useFetch = <T>(url?: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) {
      return;
    }

    setLoading(true);
    setError(null);

    if (fetchCache.has(url)) {
      setData(fetchCache.get(url));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(url);
      const result = await res.json();
      fetchCache.set(url, result);
      setData(result);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};
