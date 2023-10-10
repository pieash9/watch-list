import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ADD_TO_WATCH_LIST } from "../../interface/watchListInterface";

export interface WatchListState {
  watchList: ADD_TO_WATCH_LIST[];
  bookMark: string[];
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
    addToWatchList: (state, action: PayloadAction<ADD_TO_WATCH_LIST>) => {
      state.watchList = [...state.watchList, action.payload];
    },
  },
});

export const { addToWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
