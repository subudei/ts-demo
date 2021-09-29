import React from "react";

type StatusProps = {
  // status: string;
  status: "loading" | "success" | "error";
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data!!!";
  }
  return (
    <div>
      <h3>Status component (state props)</h3>
      <h5>Status - {message}</h5>
    </div>
  );
};

export default Status;
