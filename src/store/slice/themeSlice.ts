import { createSlice } from "@reduxjs/toolkit";
import { themeState } from "../../interface/Interfaces";

const storedMode = localStorage.getItem("theme") || "light";

const initialState: themeState = {
  mode: storedMode === "light" ? storedMode : "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
      document.querySelector("html")?.setAttribute("data-theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
