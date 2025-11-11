import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setisLiked] = useState("flase");

  function IsClicked() {
    setisLiked(!isLiked);
    console.log(isLiked);
  }

  let likedStyle = {
    color: "red",
  };

  return (
    <>
      <p onClick={IsClicked}>
        {isLiked ? (
          <i class="fa-regular fa-heart"></i>
        ) : (
          <i class="fa-solid fa-heart" style={likedStyle}></i>
        )}
      </p>
    </>
  );
}
