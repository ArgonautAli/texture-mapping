import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: { value: { imgVal: "" } },
  reducers: {
    getImage: (state, action) => {
      state.value = action.payload;
    },

    clrImage: (state) => {
      state = null;
    },
  },
});

export const { getImage, clrImage } = imageSlice.actions;
