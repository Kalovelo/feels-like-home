import { createStore } from "redux";
import themeReducer from "./reducers/themeReducer";
const initialState = {
  theme: "light"
};

const store = createStore(themeReducer, initialState);

export default store;
