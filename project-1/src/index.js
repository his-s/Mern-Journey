import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";
import CreateNewForm from "./components/CreateNewForm";
import AnimalCard from "./components/AnimalCard";

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
    <div className="container">
      <p>
        <a href="/">&laquo;Back to public homepage</a>
      </p>
      <CreateNewForm setAnimals={setAnimals} />
      <div className="animal-grid">
        {animals.map((animal) => (
          <AnimalCard
            name={animal.name}
            species={animal.species}
            key={animal._id}
            photo={animal.photo}
            id={animal._id}
            setAnimals={setAnimals}
          ></AnimalCard>
        ))}
      </div>
    </div>
  );
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
