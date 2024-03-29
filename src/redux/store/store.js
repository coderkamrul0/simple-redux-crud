import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../bookSlice/bookSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
  },
});

export default store;
