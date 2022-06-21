import React, { useState, useEffect } from "react";

export const getOneFinancing = (id) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [isLoading,setLoading] = useState(true)
  useEffect(() => {
    const callData = async () => {
      try {
        const res = await fetch(`http://youripv4adress:port/financings/${id}`);
        const final = await res.json()
        setData(final);
        setLoading(false)
      } catch (e) {
        setError(e);
      }
    };
    callData();
  }, []);

  return { error, data ,isLoading};
};
