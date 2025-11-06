import "./Product.css";

function Product({ tittle, price, features }) {
  // const list = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="Product">
      <h3>{tittle}</h3>
      <p>The Price is going to be: {price}</p>
      {/* <p>{list}</p> */}
      <p>{features.a}</p>
    </div>
  );
}

export default Product;
