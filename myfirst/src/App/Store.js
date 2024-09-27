import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";
import imageReducer from "../Features/ImageAction/ImageAcnSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imageacn: imageReducer
  }
});
