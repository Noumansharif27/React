import { Activity2 } from "./Activity2.jsx";
import "./Activity2.css";

export function Activity2CardCollections() {
  return (
    <div className="cardCollection">
      <Activity2
        tittle="Logitech MS Master 3S"
        description={["with new featres", "more buttons for more features"]}
        oldPrice={1000}
        newPrice={800}
      />
      <Activity2
        tittle="Logitech MS Master 3S"
        description={["with new featres", "more buttons for more features"]}
        oldPrice={1000}
        newPrice={800}
      />
      <Activity2
        tittle="Logitech MS Master 3S"
        description={["with new featres", "more buttons for more features"]}
        oldPrice={1000}
        newPrice={800}
      />
    </div>
  );
}
