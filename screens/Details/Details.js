import React from "react";
import { ScrollView } from "react-native";
import { DetailsList } from "../../components/Details/DetailsList";
import { ActivityIndicator } from "react-native-paper";
import { getOneFinancing } from "../../hooks/getOneFinancing";
export const Details = ({ route, navigation }) => {
  const { error, isLoading, data } = getOneFinancing(route.params.id);

  return (
    <ScrollView style={{ backgroundColor: "white", padding: 21 }}>
      {data ? (
        <>
          <DetailsList data={data} navigation={navigation} />
        </>
      ) : (
        <ActivityIndicator
          animating={true}
          style={{ marginTop: 30 }}
          color="#FF6600"
          size={50}
        />
      )}
    </ScrollView>
  );
};
