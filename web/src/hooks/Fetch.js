import React from "react";

export function useFetch(url, headers) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    async function getData() {
      const request = await fetch(url, headers);
      const response = await request.json();
      setData(response);
      setLoading(false);
    }
    getData();
  }, [loading]);

  return { data, loading };
}
