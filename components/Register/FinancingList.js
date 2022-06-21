import React from 'react'
import { Label,} from '../Register/Label';
import { ScrollView, StyleSheet } from 'react-native';
import { Input } from '../Register/Input';
import { Button,  } from "react-native-paper";
import { useForm,  } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup
  .object({
    name: yup.string()
      .min(4, "O nome precisa ter mais de 4 caracteres")
      .required("Informe seu nome"),
    balance: yup.string("Insira um número")
      .typeError("Valor deve ser numeral")
      .required("Informe seu faturamento anual"),
    value: yup.string().required("Informe o valor que deseja solicitar"),
    cep: yup
      .string()
      .max(8, "Cep são oito digitos")
      .required("Informe seu cep"),
    street: yup.string().max(20).required("Informe sua rua"),
    number: yup.string().required("Informe seu número"),
    district: yup.string().required("Informe seu bairro"),
    city: yup.string().min(3).required("Informe sua cidade"),
    state: yup.string().max(2).required("Informe seu estado com as iniciais"),
    completeName: yup.string()
      .min(5)
      .max(40)
      .required("Informe seu nome completo"),
    phone: yup.string()
      .min(10)
      .max(11)
      .required("Informe seu número de telefone e ddd"),
    email: yup.string().email().required("Informe seu email"),
    cpf: yup.string().min(11).max(11).required("Informe seu cpf"),
  });


export const FinancingList = ({buttonText,preloadedValues,handleForm,...rest}) => {
        const [isLoading,setIsLoading] = React.useState(false)
        const {
            control,
            handleSubmit,
            formState: { errors },
          } = useForm({
            resolver: yupResolver(schema),
            mode: "onChange",
            defaultValues: preloadedValues?preloadedValues:{},
          });
    return (
    <ScrollView style={{backgroundColor:'white',padding:20}}>
      <Label text="Empresa" variant={style.mainLabel} />
      <Label text="Nome da Empresa" variant={style.secondaryLabel} />

      <Input
        control={control}
        name="name"
        style={style.textInputOutlineStyle}
        errors={errors.name}
      />
      <Label text="Faturamento Anual" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="balance"
        type
        style={style.textInputOutlineStyle}
        errors={errors.balance}

      />
      
      <Label text="Valor Solicitado" variant={style.secondaryLabel} />
      <Input
        control={control}
        type
        name="value"
        style={style.textInputOutlineStyle}
        errors={errors.value}
      />
      <Label text="Endereço" variant={style.mainLabel} />
      <Label text="CEP" variant={style.secondaryLabel} />

      <Input type control={control} errors={errors.cep} name="cep" style={style.textInputOutlineStyle} />
      <Label text="Rua" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="street"
        style={style.textInputOutlineStyle}
        errors={errors.street}
      />
      <Label text="Número" variant={style.secondaryLabel} />
      <Input
        control={control}
        type
        name="number"
        style={style.textInputOutlineStyle}
        errors={errors.number}
      />
      <Label text="Bairro" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="district"
        style={style.textInputOutlineStyle}
        errors={errors.district}
     />
      <Label text="Cidade" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="city"
        style={style.textInputOutlineStyle}
        errors={errors.city}
      />
      <Label text="Estado" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="state"
        style={style.textInputOutlineStyle}
        errors={errors.state}
      />
      <Label text="Contato" variant={style.mainLabel} />
      <Label text="Nome Completo" variant={style.secondaryLabel} />

      <Input
        control={control}
        name="completeName"
        style={style.textInputOutlineStyle}
        errors={errors.completeName}
      />
      <Label text="Telefone de Contato" variant={style.secondaryLabel} />
      <Input
      type
        control={control}
        name="phone"
        style={style.textInputOutlineStyle}
        errors={errors.phone}
     />
      <Label text="Email" variant={style.secondaryLabel} />
      <Input
        control={control}
        name="email"
        style={style.textInputOutlineStyle}
        errors={errors.email}
      />
      <Label text="CPF"  variant={style.secondaryLabel} />
      <Input type control={control} errors={errors.cpf} name="cpf" style={style.textInputOutlineStyle} />
      <Button
        onPress={handleSubmit(handleForm)}
        color="white"
        icon={isLoading?'refresh':null}
        mode="elevated"
        style={{
          backgroundColor: "#FF6600",
          borderRadius: 5,
          marginBottom: 50,
          color: "white",
        }}
        {...rest}
      >
        {buttonText}
      </Button>
    </ScrollView>
  )
}


const style = StyleSheet.create({
    mainLabel: {
      fontSize: 24,
      color: "#4B4B4B",
      borderBottomWidth: 2,
      fontWeight: "bold",
      borderColor: "#D9D9D952",
      paddingBottom:6,
      marginBottom:20
    },
    secondaryLabel: {
      fontSize: 17,
      color: "#4B4B4B",
      fontWeight: "bold",
    },
    textInputOutlineStyle: {
      colors: {
        text: "#FF6600",
        primary: "#FF6600",
        underlineColor: "transparent",
        border: "red",
        background: "white",
      },
    },
  });
  