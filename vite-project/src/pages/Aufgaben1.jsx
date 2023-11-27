import { useState } from "react";
import "./Aufgaben1.scss";
const Aufgaben1 = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <section className="aufgaben1">
        <div>
          <button onClick={() => setNum(num + 1)}>+</button>
          <p>{num} </p>
          <button
            onClick={() => {
              setNum(Math.max(num - 1, 0));
            }}
          >
            -
          </button>
        </div>
        <button onClick={() => setNum(0)}>Reset</button>
      </section>
    </>
  );
};

export default Aufgaben1;
