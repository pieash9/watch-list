import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slice/watchlistSlice";

export const store = configureStore({
  reducer: {
    movieWatchList: watchListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
