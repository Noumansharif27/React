import "./App.css";
// import { Tittle, Table } from "./Tittle.jsx";
import ProductList from "./ProductList.jsx";
// import MsgBox from "./MsgBox.jsx";

function Description() {
  return <p>I am the Description!</p>;
}

function App() {
  let productParentStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  };
  return (
    <>
      <h2>Blogbuster Deals On Computer Accessories | Shop Now</h2>
      <div className="product-parent" style={productParentStyle}>
        <ProductList />
      </div>
    </>
  );
}

export default App;
