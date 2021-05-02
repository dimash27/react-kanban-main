import React, {useState} from "react";
import EdiText from 'react-editext'
import { Link } from "react-router-dom";

import "./style.css";

const FullView = ({ id, data, updateData }) => {
  const allIssues = data.map((item) => item.issues).flat();
  const issue = allIssues.find((item) => id === item.id);

  const [description, setDescription] = useState(issue.desc)
  const [header, setHeader] = useState(issue.name)

  const handleDesc = val => {
    console.log('Edited handleDesc -> ', val)
    setDescription(val)
    updateData({uid: id, desc: val})
  }

  const handleName = val => {
    console.log('Edited handleName -> ', val)
    setHeader(val)
    updateData({uid: id, name: val})
  }

  const validationFailed = (textValue) => {
    alert(`The text <${textValue}> is not valid. Please type at least 20 characters.`)
  } 

  return (
    <div className="fullView">
      {/* <h2 className="fullViewTitle">{issue.name}</h2> */}
      <EdiText
        type='textarea'
        className = 'fullViewTitle'
        value={header}
        showButtonsOnHover
        onCancel={v => console.log('CANCELLED: ', v)}
        onEditingStart={v => console.log('EDITING STARTED: ', v)}
        onSave={handleName}
        inputProps={{
          className: 'textarea',
          placeholder: 'Type your name here',
          style: {
            outline: 'none',
            minWidth: 'auto'
          },
          rows: 5
        }}
        //validationMessage="Please type at least 20 characters."
        //onValidationFail={validationFailed}
        //validation={val => val.length >= 20}
        editOnViewClick={true}
        cancelOnUnfocus
      />
      <Link to="/" className="close" />
      {/* <p className="fullViewPar">
        {issue.desc}
      </p> */}
      <EdiText
        type='textarea'
        className='fullViewPar'
        value={description}
        showButtonsOnHover
        onCancel={v => console.log('CANCELLED: ', v)}
        onEditingStart={v => console.log('EDITING STARTED: ', v)}
        onSave={handleDesc}
        inputProps={{
          className: 'textarea',
          placeholder: 'Type your description here',
          style: {
            outline: 'none',
            minWidth: 'auto'
          },
          rows: 5
        }}
        validationMessage="Please type at least 20 characters."
        onValidationFail={validationFailed}
        validation={val => val.length >= 20}
        editOnViewClick={true}
        cancelOnUnfocus
      />
      <div>
        <h4>Created at: </h4>
        <p>{issue.createdAt}</p>
        <h4>Edited at: </h4>
        <p>{issue.editedAt}</p>
      </div>
    </div>
  );
};
export default FullView;
