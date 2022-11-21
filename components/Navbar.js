import { useTailwind } from "tailwind-rn";
import { View, Text, TouchableOpacity } from "react-native";
import { useSetRecoilState } from "recoil";
import { searchInput } from "../RecoilStates/RecipeStates.js";

const Navbar = (props) => {
  const tailwind = useTailwind();
  const searchWord = useSetRecoilState(searchInput);

  const handleBack = () => {
    searchWord("");
    props.navigation.navigate(props.navigateTo);
  };

  return (
    <View
      style={tailwind(
        "flex flex-row justify-center items-end w-full h-[130] p-7 bg-[#CF6B58]"
      )}
    >
      <TouchableOpacity
        onPress={() => handleBack()}
        style={tailwind(
          "flex justify-center items-center w-[45] h-[45] absolute left-6 bottom-6 rounded-lg bg-red-50 text-red-600"
        )}
      >
        <Text style={tailwind("text-4xl font-bold text-[#703427]")}>&lt;</Text>
      </TouchableOpacity>
      <Text style={tailwind("text-3xl font-bold text-[#FFF1E3]")}>
        {props.title}
      </Text>
    </View>
  );
};

export default Navbar;
