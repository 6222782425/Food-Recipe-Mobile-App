import { useTailwind } from "tailwind-rn";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSetRecoilState } from "recoil";
import { recipeID } from "../RecoilStates/RecipeStates.js";

const FoodCard = (props) => {
  const tailwind = useTailwind();
  const setRecipeID = useSetRecoilState(recipeID);

  const handleOnClick = () => {
    setRecipeID(props.foodId);
    props.navigation.navigate("Recipe");
  };

  return (
    <View style={tailwind("flex justify-center items-center h-[200] my-2")}>
      <TouchableOpacity
        onPress={() => handleOnClick()}
        style={tailwind(
          "flex justify-center w-10/12 h-full bg-[#F8EDEB] rounded-xl px-3 pt-2"
        )}
      >
        <View style={tailwind("flex flex-row")}>
          <Image
            style={tailwind("w-[130] h-[140] self-center rounded-xl")}
            source={{ uri: props.img }}
          />
          <View
            style={tailwind("flex justify-center items-center w-[172] p-1")}
          >
            <Text
              style={tailwind("text-center text-lg font-medium text-[#703427]")}
            >
              {props.title}
            </Text>
          </View>
        </View>

        <Text style={tailwind("text-center mt-2 text-slate-500")}>
          Click to see the recipe &gt;
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;
