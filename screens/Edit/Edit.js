import React from "react";
import { View } from "react-native";
import { getOneFinancing } from "../../hooks/getOneFinancing";
import { EditList } from "../../components/Edit/EditList";

export const Edit = ({ route,navigation }) => {
  const { error, isLoading, data } = getOneFinancing(route.params.id);
  const [finalData, setData] = React.useState();
  React.useEffect(() => {
    setData(data);
  });
  return (
    <View>
      {finalData  ? <EditList preloadedValues={finalData} id={route.params.id} navigation={navigation} /> : null}
    </View>
  );
};
