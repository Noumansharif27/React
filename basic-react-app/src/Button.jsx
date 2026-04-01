function printHello() {
  console.log("Print Hello!");
}

function printBye() {
  console.log("Bye!");
}

export function Button() {
  return (
    <>
      <button onClick={printHello}>Click me!</button>
      <p onClick={printBye}>This Parah is for event Demo!</p>
    </>
  );
}
