import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      <h3>Person component (Objects as props)</h3>
      <h5>
        Passing the object as props : {props.name.first} {props.name.last}
      </h5>
    </div>
  );
};

export default Person;
