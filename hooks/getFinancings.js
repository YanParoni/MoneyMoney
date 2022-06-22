import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
export const getFinancings = (url) => {
  const isFocused = useIsFocused();

  const [error, setError] = useState();
  const [data, setData] = useState();
  const [isLoading,setLoading] = useState(true)
  useEffect(() => {
    const callData = async () => {
      try {
        const res = await fetch(url);
        const final =  await res.json()
        setData(final);
        setLoading(false)
      } catch (e) {
        setError(e);
      }
    };
    callData();
  }, [isFocused]);

  return { error, data ,isLoading};
};
