import React, { useEffect, useState } from "react";

export default function QuotationList({
  product_ids,
  quotation_table_data,
  unique_key,
  setQuotationList_data,
}) {
  const [product_id, setproduct_id] = useState("");

  const [uomOptions, setuomOptions] = useState([]);
  const [taxOptions, settaxOptions] = useState([]);

  const [product_details, setproduct_details] = useState({
    unique_key: unique_key,
    description: "--",
    uom: "",
    unit_price: 0,
    discount: 0,
    tax: "",
    quantity: 0,
  });

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
    if (product_id === "") {
      setproduct_details((prev) => {
        return { ...prev, description: "--", unit_price: 0, discount: 0 };
      });
      return;
    }
    setproduct_details((prev) => {
      const data = quotation_table_data.find(
        (ele) => ele.product_id === product_id
      );

      if (product_id !== "")
        return {
          ...prev,
          description: data.product_data.description,
          unit_price: data.product_data.unit_price,
          discount: data.product_data.discount,
        };
      else return { ...prev };
    });

    setuomOptions(
      product_id !== ""
        ? quotation_table_data.find((ele) => ele.product_id === product_id)
            .product_data.uom
        : []
    );

    settaxOptions(
      product_id !== ""
        ? quotation_table_data.find((ele) => ele.product_id === product_id)
            .product_data.tax
        : []
    );
  }, [product_id]);

  return (
    <tr>
      <td>
        <select
          id="sales_rep"
          value={product_id}
          onChange={(e) => {
            setproduct_id(e.target.value);
          }}
          required
        >
          <option value="">Select Product ID</option>
          {product_ids.map((ele, ind) => (
            <option key={ind} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </td>
      <td>{product_details.description}</td>
      <td>
        <input
          type="number"
          value={product_details.quantity}
          onChange={(e) => {
            setproduct_details((prev) => {
              return { ...prev, quantity: e.target.value };
            });
          }}
        />
      </td>
      <td>
        <select id="sales_rep" required 
              onChange={(e) => {
                setproduct_details((prev) => {
                  return { ...prev, uom: e.target.value };
                });
              }} value={product_details.uom}>
          <option value="">Select Salesperson</option>
          {uomOptions.map((ele, ind) => (
            <option
              key={ind}
              value={ele}
            >
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
        />
      </td>
      <td>
        <select id="sales_rep" required 
              onChange={(e) => {
                setproduct_details((prev) => {
                  return { ...prev, tax: e.target.value };
                });
              }} value={product_details.tax}>
          <option value="">Select Salesperson</option>
          {taxOptions.map((ele, ind) => (
            <option
              key={ind}
              value={ele}
            >
              {ele}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input type="date" />
      </td>
    </tr>
  );
}
