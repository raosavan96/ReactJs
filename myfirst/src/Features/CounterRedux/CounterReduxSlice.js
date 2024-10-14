import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {}
};

export const counterReduxSlice = createSlice({
  name: "counter redux",
  initialState,
  reducers: {
    increFun: (state, action) => {
      const { id, count } = action.payload;
      if (state.value[id] !== undefined) {
        state.value[id] = count + 1;
      } else {
        state.value[id] = 1;
      }
    }
  }
});

export const { increFun } = counterReduxSlice.actions;
export default counterReduxSlice.reducer;
