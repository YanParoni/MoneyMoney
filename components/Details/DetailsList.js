import React from "react";
import { Label } from "../Register/Label";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export const DetailsList = ({ data, navigation }) => {
  return (
    <>
      <Label text={data.name} variant={style.mainLabel} />
      <Label text="Valor Solicitado" variant={style.secondaryLabel} />
      <Label text={data.value} variant={style.finalLabel} />
      <Label text="Faturamento Anual" variant={style.secondaryLabel} />
      <Label text={data.balance} variant={style.finalLabel} />
      <TouchableOpacity
        style={{ backgroundColor: "#FFF3CD", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "#856404", fontSize: 13 }} onPress={()=>navigation.navigate('Edit',{id:data.id})}>
          Deseja editar a solicitação? Clique aqui para editar
        </Text>
      </TouchableOpacity>
      <Label text="Endereço" variant={style.mainLabel} />
      <Label text="Endereço" variant={style.secondaryLabel} />
      <Label
        text={`${data.street}, ${data.number} - ${data.district}, ${data.state}`}
        variant={style.finalLabel}
      />
      <Label text="CEP" variant={style.secondaryLabel} />
      <Label text={data.cep} style={style.finalLabel} />
      <Label text="Contato" variant={style.mainLabel} />
      <Label text="Nome" variant={style.secondaryLabel} />
      <Label text={data.completeName} variant={style.finalLabel} />
      <Label text="CPF" variant={style.secondaryLabel} />
      <Label text={data.cpf} variant={style.finalLabel} />
      <Label text="Telefone" variant={style.secondaryLabel} />
      <Label text={data.phone} variant={style.finalLabel} />
      <Label text="Email" variant={style.secondaryLabel} />
      <Label text={data.email} variant={style.finalItem} />
    </>
  );
};

const style = StyleSheet.create({
  mainLabel: {
    fontSize: 24,
    color: "#4B4B4B",
    borderBottomWidth: 2,
    fontWeight: "bold",
    borderColor: "#D9D9D952",
    paddingBottom: 6,
    marginVertical: 23,
  },
  secondaryLabel: {
    fontSize: 16,
    color: "#D9D9D9",
    fontWeight: "bold",
    marginBottom: 4,
  },
  finalLabel: {
    color: "#4B4B4B",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
  },
  finalItem: {
    color: "#4B4B4B",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 50,
  },
});
