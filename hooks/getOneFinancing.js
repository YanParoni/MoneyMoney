import React, { useState, useEffect } from "react";
import env from '../env'
import { useIsFocused } from "@react-navigation/native";

export const getOneFinancing = (id) => {
  const isFocused = useIsFocused();

  const [error, setError] = useState();
  const [data, setData] = useState();
  const [isLoading,setLoading] = useState(true)
  useEffect(() => {
    const callData = async () => {
      try {
        const res = await fetch(`${env}/${id}`);
        const final = await res.json()
        setData(final);
        setLoading(false)
      } catch (e) {
        setError(e);
      }
    };
    callData();
  }, [isFocused]);
  console.log(data)

  return { error, data ,isLoading};
};
