import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false
};
export const likeButton = createSlice({
  name: "Like Button",
  initialState,
  reducers: {
    likeAction: (state, action) => {
      let actPay = action.payload;

      actPay === false ? (state.value = true) : (state.value = false);
    }
  }
});

export const { likeAction } = likeButton.actions;
export default likeButton.reducer;
