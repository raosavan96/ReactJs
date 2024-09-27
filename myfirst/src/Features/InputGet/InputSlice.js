import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const inputSlice = createSlice({
  name: "input get",
  initialState,
  reducers: {
    inputFun: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

export const { inputFun } = inputSlice.actions;
export default inputSlice.reducer;
