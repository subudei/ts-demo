import React, { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => alert(event);
  return (
    <div>
      <h3>Input component (event props)</h3>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <input type="text" value={props.value} onChange={handleInput} />
    </div>
  );
};

export default Input;
