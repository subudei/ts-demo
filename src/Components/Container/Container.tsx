import React, { CSSProperties } from "react";

type ContainerProps = {
  styles: CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    // <div style={{ border: "1px solid black", padding: "1rem" }}>
    <div style={props.styles}>
      <h3>Container Component (style as props)</h3>
    </div>
  );
};

export default Container;
