import React from "react";
import { FinancingList } from "../../components/Register/FinancingList";
import * as yup from "yup";
import env from "../../env";
export const schema = yup.object({
  name: yup
    .string()
    .min(4, "O nome precisa ter mais de 4 caracteres")
    .required("Informe seu nome"),
  balance: yup
    .string("Insira um número")
    .typeError("Valor deve ser numeral")
    .required("Informe seu faturamento anual"),
  value: yup.string().required("Informe o valor que deseja solicitar"),
  cep: yup.string().max(8, "Cep são oito digitos").required("Informe seu cep"),
  street: yup.string().max(20).required("Informe sua rua"),
  number: yup.string().required("Informe seu número"),
  district: yup.string().required("Informe seu bairro"),
  city: yup.string().min(3).required("Informe sua cidade"),
  state: yup.string().max(2).required("Informe seu estado com as iniciais"),
  completeName: yup
    .string()
    .min(5)
    .max(40)
    .required("Informe seu nome completo"),
  phone: yup
    .string()
    .min(10)
    .max(11)
    .required("Informe seu número de telefone e ddd"),
  email: yup.string().email().required("Informe seu email"),
  cpf: yup.string().min(11).max(11).required("Informe seu cpf"),
});

export const EditList = ({ preloadedValues, id, navigation }) => {
  const handleForm = (data) => {
    fetch(`${env}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => navigation.navigate("Home"))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <FinancingList
        buttonText={"Editar"}
        preloadedValues={preloadedValues}
        handleForm={handleForm}
      />
    </>
  );
};
