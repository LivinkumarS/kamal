import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function createNewQuotationSearchSelectOption({
  setdescription,
  description,
  descriptions,
  inputDisable,
}) {


  const [options, setOptions] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption) {
      setdescription(selectedOption.value);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (descriptions.length > 0) {
      setOptions(
        descriptions.map((ele) => {
          return { value: ele, label: ele };
        })
      );
    }
  }, [descriptions]);

  return (
    <div>
      <Select
        defaultValue={description}
        onChange={setSelectedOption}
        options={options}
        isDisabled={inputDisable}
      />
    </div>
  );
}
