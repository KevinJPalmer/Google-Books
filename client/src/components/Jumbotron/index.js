import React from "react";

const Jumbotron_color =  {
  clear: "both",
  paddingTop: 120,
  textAlign: "center",
  backgroundColor :  '#000'
}


function Jumbotron({ children }) {
  return (
    <div
      style={Jumbotron_color}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
