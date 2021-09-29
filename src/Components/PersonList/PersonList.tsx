import React from "react";

type PersonListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h3>Person List component (array as props)</h3>
      {props.names.map((name) => {
        return (
          <li key={name.id}>
            {name.first} {name.last}
          </li>
        );
      })}
    </div>
  );
};

export default PersonList;
