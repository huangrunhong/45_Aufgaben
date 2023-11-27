import { useState } from "react";
import "./Aufgaben3.scss";
const Aufgaben3 = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [day, setDay] = useState("Day");
  const [button, setButton] = useState("Change to Night");
  console.log(button);
  return (
    <>
      <section className={darkmode ? "dark" : null}>
        <h1>{day}</h1>
        <button
          onClick={() => {
            setDarkmode((darkmode) => !darkmode);
            setButton(
              button === "Change to Day" ? "Change to Night" : "Change to Day"
            );
            setDay(day === "Day" ? "Night" : "Day");
          }}
        >
          {button}
        </button>
      </section>
    </>
  );
};

export default Aufgaben3;
