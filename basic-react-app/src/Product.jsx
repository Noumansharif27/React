import "./Product.css";

function Product({ tittle, price = 1 }) {
  return (
    <div className="Product">
      <h3>{tittle}</h3>
      <p>The Price is going to be: {price}</p>
    </div>
  );
}

export default Product;
