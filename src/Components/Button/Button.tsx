import React, { MouseEvent } from "react";

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <h3>Button component (event props)</h3>
      <button onClick={(event) => props.handleClick(event, 1)}>CLICK</button>
    </div>
  );
};

export default Button;
