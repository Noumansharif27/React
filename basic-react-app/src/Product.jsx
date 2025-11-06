import "./Product.css";

function Product({ tittle, price }) {
  // const list = featurese.map((feature) => <li>{feature}</li>);

  const styles = { backgroundColor: price > 3000 ? "orange" : "" };

  return (
    <div className="Product" style={styles}>
      <h3>{tittle}</h3>
      <p>The Price is going to be: {price}</p>
      {/* <p>{list}</p> */}
      {/* <p>{features.a}</p> */}
      {price > 3000 ? <p>Discount 5%</p> : null}
    </div>
  );
}

export default Product;
