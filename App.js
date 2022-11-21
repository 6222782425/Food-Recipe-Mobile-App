import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwind-rn";
import { RecoilRoot } from "recoil";
import utilities from "./tailwind.json";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Category} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Recipe" component={Recipe} />
            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
