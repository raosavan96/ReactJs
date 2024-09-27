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
      state.value = sawan;
    },
    imageSize: (state) => {
      state.width = "350px";
    },
    imageMargin: (state) => {
      state.margin = "150px";
    }
  }
});

export const { imageAcn, imageSize, imageMargin } = imageSlice.actions;
export default imageSlice.reducer;
