import React from "react";
import "./style.css";
import Issue from "Components/Issue";

const Issues = ({ issues }) => (
  <div className="issues">
    {issues.map(({ id, name }) => (
      <Issue key={id} name={name} id={id} />
    ))}
  </div>
);

export default Issues;