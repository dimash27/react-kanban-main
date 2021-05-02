import React from 'react';
import Column from 'Components/Column';
import { v4 as uuid } from "uuid";

import "./style.css";

const Main = ({ data, updateData }) => {
  return (
    <main className="main">
      {data.map(({ title, issues }, index) => (
        <Column
          key={title}
          title={title}
          issues={issues}
          previousIssues={data[index - 1] ? data[index - 1].issues : []}
          addBacklogCard={(name) => {const id = uuid(); updateData({name, id})}}
          onMove={(id) => updateData({id, index})}
        />
      ))}
    </main>
  );
}

export default Main;