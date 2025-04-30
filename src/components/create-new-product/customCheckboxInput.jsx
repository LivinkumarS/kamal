import React, { useState, useEffect } from "react";

export default function customCheckboxInput({
  handleNewProjectCustomData,
  newProductData,
  newProductcustom,
  id,
  customApi,
  handleCustomChange,
}) {
  const [custom, setCustom] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <>
      {custom ? (
        <input
          id={id}
          type="text"
          placeholder="Enter Custom Input"
          value={newProductcustom[id]}
          onChange={handleNewProjectCustomData}
        />
      ) : (
        <div className="dropdown-container">
          <button className="dropdown-button" onClick={() => setOpen(!open)}>
            Select Fruits
          </button>

          {open && (
            <div className="dropdown-menu">
              <p
                onClick={() => {
                  setCustom(true);
                }}
              >
                + Custom
              </p>
              {customApi.map((option, ind) => (
                <label key={ind} className="dropdown-option">
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}

          <p className="selected-text">
            Selected: {selectedOptions.join(", ")}
          </p>
        </div>
      )}
    </>
  );
}
