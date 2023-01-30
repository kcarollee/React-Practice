import { useState } from "react";

const Say = () => {
  // useState returns an array
  // the first of which is the initial value
  // and the second of which is a function that changes the state (setter function)
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("GOODBYE");
  const onClickLeave = () => setMessage("GOOD BYEEEE");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        RED
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        GREEN
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        BLUE
      </button>
    </div>
  );
};

export default Say;
