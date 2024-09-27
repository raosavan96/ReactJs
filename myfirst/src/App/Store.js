import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";
import imageReducer from "../Features/ImageAction/ImageAcnSlice";
import inputReducer from "../Features/InputGet/InputSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imageacn: imageReducer,
    inputfun: inputReducer
  }
});
