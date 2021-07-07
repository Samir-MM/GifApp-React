import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Buscar Gifs<input type="text" value={inputValue} onChange={handleInputChange} /></p>
    </form>
  );
};

//setCategories props is required
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
