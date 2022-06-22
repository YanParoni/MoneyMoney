import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
export const getFinancings = (url) => {
  const isFocused = useIsFocused();

  const [error, setError] = useState();
  const [data, setData] = useState();
  const [isLoading,setLoading] = useState(true)
  useEffect(() => {
    const abortControl= new AbortController()
    setTimeout(()=>{
      fetch(url, {signal:abortControl.signal})
      .then(e=>e.json())
      .then(e=>setData(e))
      .then(()=>setLoading(false))
      .catch((e)=>console.log(e));
    },3000)
    return ()=>abortControl.abort()
  }, [isFocused]);

  return { error, data ,isLoading};
};
