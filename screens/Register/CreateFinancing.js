import React from "react";
import {  StyleSheet, } from "react-native";
import { useForm } from "react-hook-form";
import { FinancingList } from "../../components/Register/FinancingList";

export const CreateFinancing = ({navigation}) => {

  const handleForm = (data) => {
    fetch("http://192.168.1.2:3000/financings", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(()=>navigation.navigate('Home')).catch((e) => console.log(e));
  };
  return (
   <FinancingList  buttonText={'Criar solicitação'} preloadedValues={[]}  handleForm={handleForm} />
  );
};

