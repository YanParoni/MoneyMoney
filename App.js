import React from "react";
import { StyleSheet, } from "react-native";
import { Home } from "./screens/Home/Home";
import { Provider as PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateFinancing } from "./screens/Register/CreateFinancing";
import { Details } from "./screens/Details/Details";
import { IconButton } from "react-native-paper";
import { Edit } from "./screens/Edit/Edit";
import { SearchContextProvider } from "./context/SearchContext";
import { useFonts } from "expo-font";
import env from "./env";
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const deleteFinancing = async (id, navigation) => {
    fetch(`${env}/${id}`, {
      method: "DELETE",
    }).then(() => navigation.navigate("Home"));
  };
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />,
      }}
    >
      <SearchContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "", headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={CreateFinancing}
              options={{
                title: "Nova Oportunidade",
                headerTintColor: "#4B4B4B",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({ route, navigation }) => ({
                title: "Detalhes",
                headerTintColor: "#4B4B4B",
                headerTitleAlign: "center",
                headerRight: () => (
                  <IconButton
                    icon="ios-trash-outline"
                    size={20}
                    onPress={() => deleteFinancing(route.params.id, navigation)}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{
                title: "Editar Oportunidade",
                headerTintColor: "#4B4B4B",
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SearchContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
});
