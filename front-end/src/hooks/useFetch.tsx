import { useState, useEffect } from "react";

interface Props {
  url: string;
}

interface Blog {
  title: string;
  author: string;
  body: string;
  id: number;
}

const useFetch = ({ url }: Props) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortConst = new AbortController();

    fetch(url, { signal: abortConst.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`could not fetch the data, Error: ${res.statusText}`);
        }

        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.namme !== "AbortError") {
          setError(err.message); // the .message is very importent here as to not to render an object but string
          setIsPending(false);
        }
      });

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
