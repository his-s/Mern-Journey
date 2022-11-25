import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";
function App() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function start() {
      const response = await Axios.get("/api/animals");
      setAnimals((prev) => (prev = response.data));
    }
    start();
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <p>From React</p>
      {animals.map((animal) => (
        <AnimalCard
          name={animal.name}
          species={animal.species}
          key={animal._id}
        ></AnimalCard>
      ))}
    </div>
  );
}
function AnimalCard(props) {
  return (
    <p>
      Hi,My Name is {props.name} and I'm {props.species}
    </p>
  );
}
const root = createRoot(document.querySelector("#app"));
root.render(<App />);
