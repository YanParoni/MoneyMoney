import React from "react";
import { ScrollView } from "react-native";
import { DetailsList } from "../../components/Details/DetailsList";
import { ActivityIndicator } from "react-native-paper";
export const Details = ({ route, navigation }) => {
  const [data, setData] = React.useState();

  const handleFetch = async (route) => {
    fetch(`http://youripv4adress:port/financings/${route}`)
      .then((e) => e.json())
      .then((e) => setData(e));
  };

  React.useEffect(() => {
    handleFetch(route.params.id);
  }, []);

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
