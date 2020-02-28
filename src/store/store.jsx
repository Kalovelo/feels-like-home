import { createStore } from "redux"
import themeReducer from "../reducers/themeReducer"

const getTimeRightNowInHours = () => new Date().getHours()

const getTheme = () => {
  let currentHours = getTimeRightNowInHours()
  return currentHours > 7 && currentHours < 19 ? "light" : "dark"
}
const initialState = {
  theme: getTheme()
}

const store = createStore(themeReducer, initialState)

export default store
