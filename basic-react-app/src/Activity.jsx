import React from "react";

function Activity({ name, color }) {
  let style = { color: color };
  return (
    <>
      <h3 style={style}>Hello {name}</h3>
    </>
  );
}

export default Activity;
