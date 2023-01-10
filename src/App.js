import { useState } from "react";
import Feedback from "./components/feedback";

function App(props) {
  const { name, age } = props;
  const [counter, setCounter] = useState(0);
  // let count = 1;
  // setTimeout(() => setCounter(counter + 1), 1000);
  const handleclick = () => setCounter(counter + 1);
  const handleclick1 = () => setCounter(0);
  const handleclick2 = () => setCounter(counter - 1);
  console.log(`rendering ${counter}`);
  return (
    <>
      <h1>
        Hello warld {name}, you are {age} years old
      </h1>
      <h2>mero world yeta xaina </h2>
      <h3>{counter}</h3>
      <button onClick={handleclick}>Plus</button>
      <button onClick={handleclick1}>Reset</button>
      <button onClick={handleclick2}>Minus</button>
      <hr />
      <Feedback />
    </>
  );
}

export default App;
