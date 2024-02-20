import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slice/AppSlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    // other reducers can go here
  },
});
