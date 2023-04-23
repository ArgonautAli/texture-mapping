import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { inputVal: "" } };

export const imageSlice = createSlice({
  name: "image",

  reducers: {
    getImage: (state, action) => {
      state.value = action.payload;
    },

    clrImage: (state) => {
      state = initialState;
    },
  },
});

export const { getImg, clrImage } = imageSlice.actions;
