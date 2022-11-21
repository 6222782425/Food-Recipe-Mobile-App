// import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { View, TextInput } from "react-native";
import { useRecoilState } from "recoil";
import { searchInput } from "../RecoilStates/RecipeStates.js";

const SearchBar = () => {
  const tailwind = useTailwind();
  const [searchText, setSearchText] = useRecoilState(searchInput);

  const onChangeText = (input) => {
    setSearchText((prev) => {
      return {
        ...prev,
        input,
      };
    });
  };

  return (
    <View style={tailwind("flex justify-center items-center")}>
      <TextInput
        style={tailwind(
          "flex items-center w-10/12 mb-5 p-2 border-2 rounded-xl border-slate-300"
        )}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Search food name here ..."
        value={searchText}
      />
    </View>
  );
};

export default SearchBar;
