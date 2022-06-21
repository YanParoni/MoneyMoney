import React from "react";
import { TextInput, Text } from "react-native-paper";
import { Controller } from "react-hook-form";

export const Input = ({ control, name, style,errors,type,...rest }, props) => {
  const keyboard= type? 'numeric': 'default'
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={{ marginBottom: 15,height:50, }}
              keyboardType={keyboard}
              selectionColor='#FF6600'
              theme={style}
              onChangeText={onChange}
              outlineColor="#ECECEC"
              mode="outlined"
              value={value}
              {...rest}
            />
          </>
        )}
      />
            {errors && <Text style={{ color: "red",paddingBottom:15 }}>{errors.message}</Text>}
    </>
  );
};
