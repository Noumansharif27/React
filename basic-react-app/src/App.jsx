import "./App.css";
import { Tittle } from "./Tittle.jsx";

function Description() {
  return <p>I am the Description!</p>;
}

function App() {
  return (
    <div>
      <Tittle />
      <Description />
      <Tittle />
      <Description />
    </div>
  );
}

export default App;
