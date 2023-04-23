import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "./redux/imageSlice/imageSlice";

export const store = configureStore({
  reducer: {
    image: imageSlice.reducer,
  },
});
