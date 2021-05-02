import React, { useState } from "react";
import Issues from "Components/Issues";
import Button from "Components/Button";
import AddCardForm from "Components/AddCardForm";
import IssueSelector from "Components/IssueSelector";

import './style.css';

const Column = ({ title, issues, addBacklogCard, previousIssues, onMove }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const isBacklog = title === "Backlog";

    const handleSubmit = (name) => {
        if (isBacklog) {
          addBacklogCard(name);
        }
        setIsFormOpen(false);
    };

    const handleSelect = (id) => {
        onMove(id);
        setIsFormOpen(false);
    };
    
    return (
        <div className="column">
          <div className="title">{title}</div>
          <Issues issues={issues} />
          {isFormOpen ? (
            isBacklog ? (
              <AddCardForm onSubmit={handleSubmit} />
            ) : (
              <IssueSelector issues={previousIssues} onSelect={handleSelect} />
            )
          ) : (
            <Button
              onClick={() => setIsFormOpen(true)}
              disabled={!isBacklog && previousIssues.length === 0}
            />
          )}
        </div>
      );
}

export default Column;