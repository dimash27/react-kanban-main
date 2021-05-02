import React, { useState } from "react";
import "./style.css";

const AddCardForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = () => {
        if (name) {
          onSubmit(name);
        }
    };

    return(
      <form onSubmit={(e) => { handleSubmit(); e.preventDefault(); }} >
        <label className="label">
          <input
            className="input"
            type="text"
            value={name}
            onChange={handleChange}
            onBlur={handleSubmit}
          />
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    )
}

export default AddCardForm;