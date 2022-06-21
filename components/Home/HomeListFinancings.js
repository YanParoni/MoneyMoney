import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

export const HomeListFinancings = ({name,cpf,value,navigation,id}) => {
  return (
    <View
      style={styles.mainContainer}
    >
      <View
        style={styles.secondContainer}
      >
        <Text
        style={styles.financingName}>{name}</Text>
        <Text style={styles.financingCpf}>{cpf}</Text>
      </View>

      <View
        style={styles.thirdContainer}
      >
        <Text
        style={styles.financingValue}
        >{`R$${value}`}</Text>

        <IconButton
          style={styles.icon}
          color="white"
          icon="arrow-forward"
          size={20}
          onPress={() => navigation.navigate('Details',{
            id:id
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        flexWrap: "wrap",
        alignItems: 'flex-start',
        padding:25
    },
    secondContainer:{
        flexDirection: "column",

    },
    thirdContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width:'100%'
    },
    financingName:{
        color:'#4B4B4B',
        fontWeight:'500',
        fontSize:17
    },
    financingCpf:{
        color:'#D9D9D9'

    },
    financingValue:{
        color:'#4B4B4B',
        fontSize:19
    },
    icon:{
        backgroundColor: "#FF6600",

    }
})