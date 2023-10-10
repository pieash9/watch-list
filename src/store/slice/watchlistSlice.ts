import { WATCH_LIST } from "../../interface/watchListInterface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WatchListState {
  watchList: WATCH_LIST[];
  wantToWatch: WATCH_LIST[];
  watching: WATCH_LIST[];
}

// watch List
const storedWatchList = localStorage.getItem("watchList");
const initialWatchList = storedWatchList ? JSON.parse(storedWatchList) : [];

// watching List
const storedWatching = localStorage.getItem("watching");
const initialWatching = storedWatching ? JSON.parse(storedWatching) : [];

// want to watch List
const storedWantToWatch = localStorage.getItem("wantToWatch");
const initialWantToWatch = storedWantToWatch
  ? JSON.parse(storedWantToWatch)
  : [];

const initialState: WatchListState = {
  watchList: initialWatchList,
  watching: initialWatching,
  wantToWatch: initialWantToWatch,
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<WATCH_LIST>) => {
      state.watchList = [...state.watchList, action.payload];
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    removeFromWatchList: (state, action: PayloadAction<string>) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    addToWantToWatch: (state, action: PayloadAction<WATCH_LIST>) => {
      state.wantToWatch = [...state.wantToWatch, action.payload];
      localStorage.setItem("wantToWatch", JSON.stringify(state.wantToWatch));
    },
    removeFromWantToWatch: (state, action: PayloadAction<string>) => {
      state.wantToWatch = state.wantToWatch.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("wantToWatch", JSON.stringify(state.wantToWatch));
    },
    addToWatching: (state, action: PayloadAction<WATCH_LIST>) => {
      state.watching = [...state.watching, action.payload];
      localStorage.setItem("watching", JSON.stringify(state.watching));
    },
    removeFromWatching: (state, action: PayloadAction<string>) => {
      state.watching = state.watching.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("watching", JSON.stringify(state.watching));
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  addToWantToWatch,
  removeFromWantToWatch,
  addToWatching,
  removeFromWatching,
} = watchListSlice.actions;

export default watchListSlice.reducer;
