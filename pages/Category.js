import { useTailwind } from "tailwind-rn";
import { View, Text, Image } from "react-native";
import CategoryButton from "../components/CategoryButton";

const Category = ({ navigation }) => {
  const tailwind = useTailwind();
  const categoryList = [
    "Pork",
    "Beef",
    "Chicken",
    "Fish",
    "Fruit",
    "Vegetable",
  ];

  const createButton = () => {
    let button = categoryList.map((name) => {
      return (
        <CategoryButton
          key={name}
          categoryName={name}
          navigation={navigation}
        />
      );
    });
    return button;
  };

  return (
    <View style={tailwind("flex h-full bg-white")}>
      <View
        style={tailwind(
          "flex flex-row justify-center items-center w-full h-1/4 p-5 bg-[#CF6B58]"
        )}
      >
        <Image
          style={tailwind("w-[130] h-[130] mr-2")}
          source={require("../assets/books.png")}
        />
        <Text style={tailwind("text-4xl font-bold text-[#FFF1E3]")}>
          Food Recipe
        </Text>
      </View>

      <View style={tailwind("flex items-center justify-center p-5")}>
        <Text
          style={tailwind(
            "w-2/3 mb-5 text-center text-3xl font-semibold text-[#96976A]"
          )}
        >
          Choose Your Category
        </Text>

        <View style={tailwind("flex flex-row flex-wrap w-11/12")}>
          {createButton()}
        </View>
      </View>
    </View>
  );
};

export default Category;
