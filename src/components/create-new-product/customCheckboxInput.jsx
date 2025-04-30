import React, { useState, useEffect } from "react";

export default function customCheckboxInput({
  handleNewProjectCustomData,
  newProductcustom,
  id,
  customApi,
  setnewProductData,
}) {
  const [custom, setCustom] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    setnewProductData((prev) => {
      return { ...prev, [id]: selectedOptions };
    });
  }, [selectedOptions]);

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
          <div className="dropdown-button" onClick={() => setOpen(!open)}>
            Select Fruits
          </div>

          {open && (
            <div className="dropdown-menu">
              <p
                onClick={() => {
                  setCustom(true);
                  setSelectedOptions([]);
                }}
              >
                custom
              </p>
              {customApi.map((option) => (
                <label key={option} className="dropdown-option">
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
        </div>
      )}
    </>
  );
}
