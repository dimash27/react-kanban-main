import React from "react";
import "./style.css";

const IssueSelector = ({ issues, onSelect }) => (
  <select className="selector" onChange={(e) => onSelect(e.target.value)}>
    <option value="" />
    {issues.map((issue) => (
      <option value={issue.id} key={issue.id}>
        {issue.name}
      </option>
    ))}
  </select>
);

export default IssueSelector;