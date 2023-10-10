import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slice/watchlistSlice";
import themeSlice from "./slice/themeSlice";

export const store = configureStore({
  reducer: {
    movieWatchList: watchListSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
