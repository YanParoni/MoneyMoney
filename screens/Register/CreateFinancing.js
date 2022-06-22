import React from "react";
import { FinancingList } from "../../components/Register/FinancingList";
import env from "../../env";
export const CreateFinancing = ({navigation}) => {

  const handleForm = (data) => {
    fetch(env, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(()=>navigation.navigate('Home')).catch((e) => console.log(e));
  };
  return (
   <FinancingList  buttonText={'Criar solicitação'} preloadedValues={[]}  handleForm={handleForm} />
  );
};

