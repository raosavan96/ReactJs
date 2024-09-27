import React from "react";
import { useDispatch } from "react-redux";
import { imageSize } from "../../Features/ImageAction/ImageAcnSlice";

function ImageSize() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(imageSize());
        }}
        className="bg-white text-black py-2 px-3 rounded-lg"
      >
        Image Size
      </button>
    </>
  );
}

export default ImageSize;
