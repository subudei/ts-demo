import React from "react";
type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h3>Heading component (rendering children as props)</h3>
      <h4>{props.children}</h4>
    </div>
  );
};

export default Heading;
