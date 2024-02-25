import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    artir: (state) => {
      state.value++;
    },
    azalt: (state) => {
      state.value--;
    },
  },
});
export const { artir, azalt } = counter.actions;
export default counter.reducer;
