import "./Product.css";
import Price from "./Price";

// function Product({ tittle, price }) {
//   // const list = featurese.map((feature) => <li>{feature}</li>);

//   const styles = { backgroundColor: price > 3000 ? "orange" : "" };

//   return (
//     <div className="Product" style={styles}>
//       <h3>{tittle}</h3>
//       <p>The Price is going to be: {price}</p>
//       {/* <p>{list}</p> */}
//       {/* <p>{features.a}</p> */}
//       {price > 3000 ? <p>Discount 5%</p> : null}
//     </div>
//   );
// }

function Product({ tittle, idx }) {
  let productStyle = {
    width: "350px",
    height: "200px",
    padding: "0",
  };

  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "91,99", "899", "278"];

  let description = [
    ["800 DPI", "Design for Ipad Pro"],
    ["Design for Ipada pro", "800 DPI"],
    ["Intutive Surface", "Wireless"],
    ["Wireless", "Intutive Surface"],
  ];
  // let newPrices = ["8,999", "91,99", "899", "278"];

  return (
    <div className="Product" style={productStyle}>
      <h3>{tittle}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
