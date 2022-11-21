import { useTailwind } from "tailwind-rn";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../RecoilStates/RecipeStates.js";

const CategoryButton = (props) => {
  const tailwind = useTailwind();
  const setCategory = useSetRecoilState(categoryState);
  let imgName = props.categoryName.toLowerCase();

  const createIcon = () => {
    if (imgName === "pork") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/pork.png")}
        />
      );
    } else if (imgName === "beef") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/beef.png")}
        />
      );
    } else if (imgName === "chicken") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/chicken.png")}
        />
      );
    } else if (imgName === "fish") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/fish.png")}
        />
      );
    } else if (imgName === "fruit") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/fruit.png")}
        />
      );
    } else if (imgName === "vegetable") {
      return (
        <Image
          style={tailwind("w-[50] h-[50] self-center")}
          source={require("../assets/vegetable.png")}
        />
      );
    }
  };

  const handleOnPress = () => {
    setCategory(imgName);
    props.navigation.navigate("Search");
  };

  return (
    <View style={tailwind("w-2/5 m-2")}>
      <TouchableOpacity
        onPress={() => handleOnPress()}
        style={tailwind(
          "flex justify-center items-center w-full h-[110] m-2 rounded-3xl bg-red-50 text-red-600"
        )}
      >
        {createIcon()}
        <Text style={tailwind("text-xl text-[#703427]")}>
          {props.categoryName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryButton;
