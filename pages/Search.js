import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { View, Text, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import {
  categoryState,
  getCategoryList,
  searchInput,
} from "../RecoilStates/RecipeStates.js";
import Navbar from "../components/Navbar.js";
import FoodCard from "../components/FoodCard.js";
import SearchBar from "../components/SearchBar.js";

const Search = ({ navigation }) => {
  const tailwind = useTailwind();
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryList = useRecoilState(getCategoryList);
  const searchWord = useRecoilState(searchInput);
  let foodList = [];

  const filterList = () => {
    if (!searchWord[0].input) {
      foodList = categoryList[0];
    } else {
      const word = searchWord[0].input.split(" ").join().toLowerCase();

      const newList = categoryList[0].filter((info) => {
        let title = info.title.toLowerCase();

        return title.includes(word);
      });
      foodList = newList;
    }
  };

  const createCard = () => {
    filterList();
    if (!foodList.length) {
      return (
        <Text
          style={tailwind("text-center text-xl my-5 font-bold text-rose-800")}
        >
          No Result Found
        </Text>
      );
    } else {
      let card = foodList.map((info) => {
        return (
          <FoodCard
            key={info.id}
            title={info.title}
            img={info.image}
            foodId={info.id}
            navigation={navigation}
          />
        );
      });
      return card;
    }
  };

  return (
    <View style={tailwind("h-full bg-white")}>
      <Navbar navigation={navigation} title="Search Recipe" navigateTo="Home" />
      <Text
        style={tailwind("text-center text-2xl my-5 font-bold text-[#96976A]")}
      >
        Search in{" "}
        {category[0].toUpperCase() + category.slice(1, category.length)}{" "}
        Category
      </Text>
      <SearchBar />

      <ScrollView style={tailwind("flex")}>{createCard()}</ScrollView>
    </View>
  );
};

export default Search;
