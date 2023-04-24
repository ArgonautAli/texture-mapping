import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { shapeVal: "Cuboid" } };
export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    getShape: (state, action) => {
      state.value = action.payload;
    },

    clrShape: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { getShape, clrShape } = shapeSlice.actions;
