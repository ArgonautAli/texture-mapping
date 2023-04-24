import { createSlice } from "@reduxjs/toolkit";

export const shapeSlice = createSlice({
  name: "shape",
  initialState: { value: { shapeVal: "" } },
  reducers: {
    getShape: (state, action) => {
      state.value = action.payload;
    },

    clrShape: (state) => {
      state = null;
    },
  },
});

export const { getShape, clrShape } = shapeSlice.actions;
