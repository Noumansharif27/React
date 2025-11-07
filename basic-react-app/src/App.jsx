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
  };
  return (
    <div className="product-parent" style={productParentStyle}>
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  );
}

export default App;
