import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const inputSlice = createSlice({
  name: "input value get",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

export const { handleInput } = inputSlice.actions;
export default inputSlice.reducer;
