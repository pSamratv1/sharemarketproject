import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkModeEnabled: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.darkModeEnabled = true;
    },
    disableDarkMode: (state) => {
      state.darkModeEnabled = false;
    },
    toggleDarkMode: (state) => {
      state.darkModeEnabled = !state.darkModeEnabled;
    },
  },
});

export const { enableDarkMode, disableDarkMode, toggleDarkMode } =
  darkModeSlice.actions;

export default darkModeSlice.reducer;
