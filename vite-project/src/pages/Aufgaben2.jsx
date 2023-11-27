import { useState } from "react";
import "./Aufgaben2.scss";
const Aufgaben2 = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="aufgaben2">
        <form>
          <input
            type="text"
            placeholder="firstname"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            placeholder="lastname"
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </form>
        <p>Vorname: {firstname}</p>
        <p>Nachname: {lastname} </p>
        <p>Email: {email} </p>
      </section>
    </>
  );
};

export default Aufgaben2;
