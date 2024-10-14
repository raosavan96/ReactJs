import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAction } from "../../Features/LikeBtn/LikeSlice";

function LikeBtn() {
  const likes = useSelector((state) => state.likebtn.value);
  console.log(likes);
  const dispatch = useDispatch();

  function handleLike() {
    dispatch(likeAction(likes));
  }
  return (
    <>
      <button onClick={handleLike} className="text-5xl ms-5 mt-5">
        {likes ? (
          <i class="fa-solid fa-heart text-[red]"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </button>
    </>
  );
}

export default LikeBtn;
