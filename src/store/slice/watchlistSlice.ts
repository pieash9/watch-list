import { WATCH_LIST } from "../../interface/watchListInterface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WatchListState {
  watchList: WATCH_LIST[];
  wantToWatch: WATCH_LIST[];
  alreadyWatch: string[];
}

const initialState: WatchListState = {
  watchList: [],
  alreadyWatch: [],
  wantToWatch: [],
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<WATCH_LIST>) => {
      state.watchList = [...state.watchList, action.payload];
    },
    removeFromWatchList: (state, action: PayloadAction<string>) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload
      );
    },
    addToWantToWatch: (state, action: PayloadAction<WATCH_LIST>) => {
      state.wantToWatch = [...state.wantToWatch, action.payload];
    },
    removeFromWantToWatch: (state, action: PayloadAction<string>) => {
      state.wantToWatch = state.wantToWatch.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  addToWatchList,
  addToWantToWatch,
  removeFromWatchList,
  removeFromWantToWatch,
} = watchListSlice.actions;

export default watchListSlice.reducer;
