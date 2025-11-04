import "./App.css";

// Creating our 1st component
function Tittle() {
  return <h1>I am the Tittle!</h1>;
}

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
