import React, { useEffect, useState } from "react";

export default function QuotationList({
  descriptions,
  quotation_table_data,
  unique_key,
  setQuotationList_data,
}) {
  const [description, setdescription] = useState("");
  const [descriptionInp, setdescriptionInp] = useState("");
  const [showOptions, setshowOptions] = useState(false);

  const [filteredOptions, setfilteredOptions] = useState([]);

  const [uomOptions, setuomOptions] = useState([]);
  const [taxOptions, settaxOptions] = useState([]);

  const [product_details, setproduct_details] = useState({
    unique_key: unique_key,
    product_id: "--",
    description: "--",
    uom: "--",
    unit_price: 0,
    discount: 0,
    tax: "--",
    quantity: 0,
    expected_delivery: "",
  });

  useEffect(() => {
    setfilteredOptions(descriptions);
  }, [descriptions]);

  useEffect(() => {
    setQuotationList_data((prev) => {
      return prev.map((ele) => {
        if (ele.unique_key === unique_key) {
          return product_details;
        }
        return ele;
      });
    });
  }, [product_details]);

  useEffect(() => {
    if (description === "") {
      setproduct_details((prev) => {
        return { ...prev, description: "--", unit_price: 0, discount: 0 };
      });
      return;
    }
    setproduct_details((prev) => {
      const data = quotation_table_data.find(
        (ele) => ele.description === description
      );

      if (description !== "") {
        setdescriptionInp(data.description);
        return {
          ...prev,
          description: data.description,
          unit_price: data.unit_price,
          discount: data.discount,
          product_id: data.product_id,
        };
      } else return { ...prev };
    });

    setuomOptions(
      description !== ""
        ? quotation_table_data.find((ele) => ele.description === description)
            .uom
        : []
    );

    settaxOptions(
      description !== ""
        ? quotation_table_data.find((ele) => ele.description === description)
            .tax
        : []
    );
  }, [description]);

  useEffect(() => {
      if (descriptionInp === "") {
        setfilteredOptions(descriptions);
      return;
    }

    setfilteredOptions(
      descriptions.filter((ele) => {
        return ele.toLowerCase().includes(descriptionInp.toLowerCase());
      })
    );
  }, [descriptionInp]);

  return (
    <tr>
      <td style={{position: "relative"}}>
        <input
          type="text"
          value={descriptionInp}
          onChange={(e) => {
            setdescriptionInp(e.target.value);
          }}
          onFocus={() => {
            setshowOptions(true);
          }}
          // onBlur={() => setshowOptions(false)}
        />

        {showOptions && (
          <div className="newQuotation-option-menu">
            {filteredOptions.map((ele, ind) => (
              <button
                key={ind}
                onClick={(e) => {
                  e.preventDefault();
                  setdescription(ele);
                  setshowOptions(false);
                }}
              >
                {ele}
              </button>
            ))}
          </div>
        )}
      </td>

      <td>{product_details.product_id}</td>

      <td>
        <input
          type="number"
          value={product_details.quantity}
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, quantity: e.target.value };
            });
          }}
          required
        />
      </td>
      <td>
        <select
          required
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, uom: e.target.value };
            });
          }}
          value={product_details.uom}
        >
          <option value="">Select UOM</option>
          {uomOptions.map((ele, ind) => (
            <option key={ind} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="number"
          value={product_details.unit_price}
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, unit_price: e.target.value };
            });
          }}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={product_details.discount}
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, discount: e.target.value };
            });
          }}
          required
        />
      </td>
      <td>
        <select
          required
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, tax: e.target.value };
            });
          }}
          value={product_details.tax}
        >
          <option value="">Select Tax</option>
          {taxOptions.map((ele, ind) => (
            <option key={ind} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="date"
          value={product_details.expected_delivery}
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, expected_delivery: e.target.value };
            });
          }}
          required
        />
      </td>
    </tr>
  );
}
