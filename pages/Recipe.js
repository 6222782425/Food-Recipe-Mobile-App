import { useTailwind } from "tailwind-rn";
import { useRecoilState } from "recoil";
import { getFoodInfo } from "../RecoilStates/RecipeStates.js";
import { View, Text, Image, ScrollView } from "react-native";
import Navbar from "../components/Navbar.js";

const Recipe = ({ navigation }) => {
  const tailwind = useTailwind();
  const foodInfo = useRecoilState(getFoodInfo);
  const ingredientList = [];
  const stepsList = [];

  const getRecipInfo = () => {
    foodInfo[0].analyzedInstructions[0].steps.forEach((info) => {
      info.ingredients.forEach((element) => {
        if (!ingredientList.includes(element.name)) {
          ingredientList.push(element.name);
        }
      });

      stepsList.push(info.step);
    });
  };

  getRecipInfo();

  const createIngredients = () => {
    const list = ingredientList.map((ingredient, index) => {
      return (
        <Text key={ingredient} style={tailwind("text-lg")}>
          {index + 1}. {ingredient}
        </Text>
      );
    });
    return list;
  };

  const createSteps = () => {
    const steps = stepsList.map((step, index) => {
      return (
        <Text key={index} style={tailwind("text-lg mb-3")}>
          {index + 1}. {step}
        </Text>
      );
    });
    return steps;
  };

  return (
    <View style={tailwind("h-full bg-white")}>
      <Navbar navigation={navigation} title="Food Recipe" navigateTo="Search" />
      <ScrollView style={tailwind("flex w-full mb-10")}>
        <View style={tailwind("flex items-center")}>
          <Text
            style={tailwind(
              "text-center w-10/12 my-5 text-2xl font-bold text-[#96976A]"
            )}
          >
            {foodInfo[0].title}
          </Text>
          <View style={tailwind("w-10/12 h-[200]")}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              source={{ uri: foodInfo[0].image }}
            />
          </View>

          <View style={tailwind("flex w-10/12 my-5")}>
            <Text style={tailwind("text-xl mb-2 font-medium text-[#703427]")}>
              Ingredients:
            </Text>
            {createIngredients()}
          </View>

          <View style={tailwind("flex w-10/12")}>
            <Text style={tailwind("text-xl mb-2 font-medium text-[#703427]")}>
              Steps:
            </Text>
            {createSteps()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Recipe;
