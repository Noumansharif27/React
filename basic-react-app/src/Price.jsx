export default function Price({ oldPrice, newPrice }) {
  let PriceStyle = {
    backgroundColor: "#e0c367",
    height: "40px",
    marginTop: "1.85rem",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  };

  let oldPriceStyle = {
    textDecoration: "line-through",
  };

  let newPriceStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={PriceStyle}>
      <span style={oldPriceStyle}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={newPriceStyle}>{newPrice}</span>
    </div>
  );
}

//  Price;
