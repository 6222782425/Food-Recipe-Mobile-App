import { atom, selector } from "recoil";
import axios from "axios";

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

const callApi = async (category) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=236b20486fda46639040890b32c234b0&ingredients=${category}&number=100`
  );
  return response.data;
};

export const getCategoryList = selector({
  key: "getCategoryList",
  get: ({ get }) => {
    const category = get(categoryState);
    return callApi(category);
  },
});

export const searchInput = atom({
  key: "searchInput",
  default: "",
});

export const recipeID = atom({
  key: "recipeID",
  default: "",
});

const callFoodApi = async (id) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=236b20486fda46639040890b32c234b0`
  );
  return response.data;
};

export const getFoodInfo = selector({
  key: "getFoodInfo",
  get: ({ get }) => {
    const foodId = get(recipeID);
    return callFoodApi(foodId);
  },
});
