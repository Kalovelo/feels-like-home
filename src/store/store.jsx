import { createStore } from "redux"
import themeReducer from "../reducers/themeReducer"

export const getTheme = () => {
  let currentHours = new Date().getHours()
  return currentHours >= 7 && currentHours <= 19 ? "light" : "dark"
}

const initialState = {
  theme: getTheme()
}

const store = createStore(themeReducer, initialState)

export default store
