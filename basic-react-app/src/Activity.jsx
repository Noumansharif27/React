import React from "react";

function Activity({ userName, textColor }) {
  let style = { color: textColor };
  return (
    <>
      <h3 style={style}>Hello {userName}</h3>
    </>
  );
}

export default Activity;
