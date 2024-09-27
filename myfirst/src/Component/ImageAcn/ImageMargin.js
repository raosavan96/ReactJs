import React from "react";
import { useDispatch } from "react-redux";
import { imageMargin } from "../../Features/ImageAction/ImageAcnSlice";

function ImageMargin() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(imageMargin());
        }}
        className="bg-white text-black py-2 px-3 rounded-lg"
      >
        Image Margin
      </button>
    </>
  );
}

export default ImageMargin;
