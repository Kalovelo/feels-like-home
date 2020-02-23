const initial = {
  theme: "light"
}

const themeReducer = (state = initial, action) => {
  let newTheme
  switch (action.type) {
    case "TOGGLE_LIGHT":
      newTheme = {
        ...state,
        theme: "light"
      }
      return newTheme
    case "TOGGLE_DARK":
      newTheme = {
        ...state,
        theme: "dark"
      }
      return newTheme
    case "TOGGLE":
      newTheme = {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      }
      return newTheme
    default:
      return state
  }
}

export default themeReducer
