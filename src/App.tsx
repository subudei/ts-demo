import React from "react";

import "./App.css";
import Bar from "./Components/Bar/Bar";
import Button from "./Components/Button/Button";
import Container from "./Components/Container/Container";
import Greet from "./Components/Greet/Greet";
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
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
      <Heading>text rendered as childen of component</Heading>
      <Bar>
        <Heading>Text in child component</Heading>
      </Bar>
      <Greet name="Bond" logged={true} />
      <Button
        handleClick={(event, id) => {
          alert("event prop onClick");
          console.log("event prop onClick", event, id);
        }}
      />
      <Input
        value="random value"
        handleChange={(event) => console.log(event)}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
