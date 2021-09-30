import React, { ReactNode } from "react";

type BarProps = {
  children: ReactNode;
};
const Bar = (props: BarProps) => {
  return (
    <div>
      <h3>Bar component (render children component)</h3>
      <h5>{props.children}</h5>
    </div>
  );
};

export default Bar;
