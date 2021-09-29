import React from "react";

import "./App.css";
import Greet from "./Components/Greet/Greet";
import Person from "./Components/Person/Person";
import PersonList from "./Components/PersonList/PersonList";
import Status from "./Components/Status/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      id: 1,
      first: "Javier",
      last: "Zaneti",
    },
    {
      id: 2,
      first: "Pablo",
      last: "Aimar",
    },
    {
      id: 3,
      first: "Claudio",
      last: "Lopez",
    },
  ];
  return (
    <div className="App">
      <h2>Typescript Demo</h2>
      <Greet name="Batman" messages={7} logged={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
    </div>
  );
}

export default App;
