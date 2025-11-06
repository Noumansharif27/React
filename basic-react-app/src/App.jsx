import "./App.css";
import { Tittle, Table } from "./Tittle.jsx";
import ProductList from "./ProductList.jsx";
// import MsgBox from "./MsgBox.jsx";

function Description() {
  return <p>I am the Description!</p>;
}

function App() {
  return (
    <>
      {/* <MsgBox userName="Nouman" colorName="purple" /> */}
      <ProductList />
    </>
  );
}

export default App;
