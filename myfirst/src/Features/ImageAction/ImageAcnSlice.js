import { createSlice } from "@reduxjs/toolkit";
import sawan from "./images/sawan.png";
import sonu from "./images/sonu.jpg";

const initialState = {
  value: sonu,
  width: "200px",
  margin: "0px"
};

export const imageSlice = createSlice({
  name: "image action",
  initialState,
  reducers: {
    imageAcn: (state) => {
      state.value = state.value === sonu ? sawan : sonu;
    },
    imageSize: (state) => {
      state.width = state.width === "200px" ? "350px" : "200px";
    },
    imageMargin: (state) => {
      state.margin = state.margin === "0px" ? "150px" : "0px";
    }
  }
});

export const { imageAcn, imageSize, imageMargin } = imageSlice.actions;
export default imageSlice.reducer;
