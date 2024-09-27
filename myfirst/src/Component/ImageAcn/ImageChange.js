import React from "react";
import { useDispatch } from "react-redux";
import { imageAcn } from "../../Features/ImageAction/ImageAcnSlice";

function ImageChange() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(imageAcn());
        }}
        className="bg-white text-black py-2 px-3 rounded-lg"
      >
        Image Change
      </button>
    </>
  );
}

export default ImageChange;
