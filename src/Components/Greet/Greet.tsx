import React from "react";
type GreetProps = {
  name: string;
  messages: number;
  logged: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h3>Greet Component (simple params as props) </h3>
      <h5>
        renders prop from parent : {props.name} have {props.messages} unread
        messages
      </h5>

      {props.logged ? <h5>Batman is loged in</h5> : <h5>Log in</h5>}
    </div>
  );
};

export default Greet;
