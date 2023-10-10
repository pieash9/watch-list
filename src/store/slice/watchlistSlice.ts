import { WATCH_LIST } from "../../interface/watchListInterface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WatchListState {
  watchList: WATCH_LIST[];
  bookMark: WATCH_LIST[];
  alreadyWatch: string[];
}

const initialState: WatchListState = {
  watchList: [],
  alreadyWatch: [],
  bookMark: [],
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
    addToBookMark: (state, action: PayloadAction<WATCH_LIST>) => {
      state.bookMark = [...state.bookMark, action.payload];
    },
    removeFromBookMark: (state, action: PayloadAction<string>) => {
      state.bookMark = state.bookMark.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  addToWatchList,
  addToBookMark,
  removeFromWatchList,
  removeFromBookMark,
} = watchListSlice.actions;

export default watchListSlice.reducer;
