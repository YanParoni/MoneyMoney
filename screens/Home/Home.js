import React from "react";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { HomeListFinancings } from "../../components/Home/HomeListFinancings";
import { FlatList, View, Text } from "react-native";
import { IconButton, ActivityIndicator } from "react-native-paper";
import { getFinancings } from "../../hooks/getFinancings";
import { useIsFocused } from "@react-navigation/native";
import { SearchContext } from "../../context/SearchContext";
import env from'../../env'
export const Home = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { data } = getFinancings(env);
  const [finalData, setData] = React.useState();
  const { search } = React.useContext(SearchContext);
  React.useEffect(() => {
    setData(data);
  }, [isFocused, data]);

  const filterData = () => {
    const final = finalData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(final);
  };
  React.useEffect(() => {
    if (search) {
      filterData();
    } else {
      setData(data);
    }
  }, [search]);
  return (
    <>
      <View style={{ flexDirection: "column", backgroundColor: "white" }}>
        <HomeHeader />
        {finalData ? (
          <FlatList
            style={{ height: "57%" }}
            data={finalData}
            renderItem={({ item }) => (
              <HomeListFinancings
                name={item.name}
                value={item.value}
                navigation={navigation}
                cpf={item.cpf}
                id={item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ height: "57%" }}>
            <ActivityIndicator
              animating={true}
              style={{ marginTop: 30 }}
              color="#FF6600"
              size={50}
            />
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <IconButton
          style={{ backgroundColor: "#FF6600", borderRadius: 5 }}
          color="white"
          icon="add"
          size={30}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </>
  );
};
