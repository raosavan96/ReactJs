import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";
import imageReducer from "../Features/ImageAction/ImageAcnSlice";
import inputReducer from "../Features/InputGet/InputSlice";
import likeReducer from "../Features/LikeBtn/LikeSlice";
import counterRdReducer from "../Features/CounterRedux/CounterReduxSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imageacn: imageReducer,
    inputvalue: inputReducer,
    likebtn: likeReducer,
    cntrrdx: counterRdReducer
  }
});
