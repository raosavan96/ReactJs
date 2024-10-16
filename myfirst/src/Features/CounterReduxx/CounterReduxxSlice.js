import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {}
};

export const CounterReduxxSlice = createSlice({
  name: "Counter Redux 2",
  initialState,
  reducers: {
    incrementFun: (state, action) => {
      const { id, count } = action.payload;
      if (state.value[id] !== undefined) {
        state.value[id] = count + 1;
      } else {
        state.value[id] = 1;
      }
    }
  }
});

export const { incrementFun } = CounterReduxxSlice.actions;
export default CounterReduxxSlice.reducer;
