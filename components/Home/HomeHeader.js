import React,{useContext} from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { SearchContext } from "../../context/SearchContext";
export const HomeHeader = () => {
 const {setSearch,search} = useContext(SearchContext)
  const [query,setQuery] = React.useState(search)
  return (
    <>
      <View style={style.iconsContainer}>
        <TouchableOpacity style={[style.icon, style.medium]}>
          <AntDesign name="user" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[style.icon, style.small]}>
          <Feather name="bell" size={22} color="#D9D9D9" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "column", marginTop: 15 }}>
        <Text style={style.titleText}>Oportunidades</Text>

        <TextInput
          theme={style.textInputOutlineStyle}
          outlineColor="#ECECEC"
          left={
            <TextInput.Icon
              name="search"
              size={28}
              color={(isTextInputFocused) =>
                isTextInputFocused ? "#FF6600" : "#D9D9D9"
              }
            />
          }
          onChangeText={(text)=>setQuery(text)}
          onSubmitEditing={() => {
            setSearch(query);
          }}
          value={query}
          mode="outlined"
          style={style.input}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  icon: {
    margin: 25,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  medium: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  small: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 12,
  },
  SectionStyle: {
    flex: 1,
    backgroundColor: "#fff",
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
