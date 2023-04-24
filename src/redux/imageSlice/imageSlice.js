import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { imgVal: "" } };

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    getImage: (state, action) => {
      state.value = action.payload;
    },

    clrImage: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { getImage, clrImage } = imageSlice.actions;
