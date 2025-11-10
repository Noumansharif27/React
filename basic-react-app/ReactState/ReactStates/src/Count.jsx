export default function Counter() {
  let count = 0;

  function InCount() {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={InCount}>Increase Count</button>
    </div>
  );
}
