import "./App.css";
import Product from "./Product.jsx";

function App() {
  let options = ["high-tech", "Durable", "Reliable"];
  return (
    <>
      <Product tittle="Phone" price={20000} features={options} />
      {/* <Product tittle="Laptop" price={10000} />
    <Product tittle={"Pen"} price={10} /> */}
    </>
  );
}

export default App;
