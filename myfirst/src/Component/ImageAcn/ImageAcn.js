import React from "react";
import { useSelector } from "react-redux";
import ImageChange from "./ImageChange";
import ImageSize from "./ImageSize";
import ImageMargin from "./ImageMargin";

function ImageAcn() {
  const imageValue = useSelector((state) => state.imageacn.value);
  const imageSize = useSelector((state) => state.imageacn.width);
  const imageMargin = useSelector((state) => state.imageacn.margin);

  return (
    <>
      <div className="text-center mt-3">Image Actions</div>
      <div className="flex justify-center mt-3 gap-2">
        <ImageChange />
        <ImageSize />
        <ImageMargin />
      </div>
      <div
        style={{ height: "450px" }}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full flex justify-center flex-col items-center">
          <img
            style={{ width: `${imageSize}`, marginTop: `${imageMargin}` }}
            src={imageValue}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ImageAcn;
