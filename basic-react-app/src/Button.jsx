export default function Button() {
  let printHello = () => {
    console.log("hello world!");
  };

  let printBye = () => {
    console.log("bye world!");
  };
  return (
    <>
      <button onClick={printHello}>Click me!</button>
      <p onClick={printBye}>click on this paragraph</p>
    </>
  );
}
