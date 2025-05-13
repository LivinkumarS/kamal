import React, { useEffect, useState } from "react";
import "./createNewQuotation.css";
import QuotationList from "./QuotationList";

export default function createNewQuotation({
  showNewQuotation,
  setshowNewQuotation,
}) {
  const [ApiNewQuotation, setApiNewQuotation] = useState({});
  const [customer_name, setcustomer_name] = useState([]);
  const [sales_rep, setsales_rep] = useState([]);
  const [currency, setcurrency] = useState([]);
  const [quotation_table_data, setquotation_table_data] = useState([]);
  const [product_ids, setproduct_ids] = useState([]);

  // QuotationList Data
  const [numberOfQuotationList, setnumberOfQuotationList] = useState(1);
  const [QuotationList_data, setQuotationList_data] = useState([{unique_key: 0}]);

  const newQuotationFromApi = {
    customer_name: ["Mandy", "Rose", "Sans"],
    sales_rep: ["Sans", "rose", "Mandy"],
    currency: ["USD", "IND", "ERU", "GBP", "SGD"],
    product_id: ["PRO001", "PRO002", "PRO003"],
    quotation_table_data: [
      {
        product_id: "PRO001",
        product_data: {
          description: "E-shirt",
          uom: ["Set (5)", "Box (5)"],
          unit_price: "120",
          discount: "5",
          tax: ["GST 18%", "VAT-12%"],
        },
      },
      {
        product_id: "PRO002",
        product_data: {
          description: "M-shirt",
          uom: ["Set (5)", "Box (5)"],
          unit_price: "130",
          discount: "5",
          tax: ["GST 18%", "VAT-12%"],
        },
      },
      {
        product_id: "PRO003",
        product_data: {
          description: "T-shirt",
          uom: ["Set (5)", "Box (5)"],
          unit_price: "150",
          discount: "5",
          tax: ["GST 18%", "VAT-12%"],
        },
      },
    ],
  };

  console.log(QuotationList_data);
  

  useEffect(() => {
    setApiNewQuotation(newQuotationFromApi);
  }, []);
  useEffect(() => {
    if (Object.keys(ApiNewQuotation).length > 0) {
      setcustomer_name(ApiNewQuotation.customer_name);
      setsales_rep(ApiNewQuotation.sales_rep);
      setcurrency(ApiNewQuotation.currency);
      setproduct_ids(ApiNewQuotation.product_id);
      setquotation_table_data(ApiNewQuotation.quotation_table_data);
    }
  }, [ApiNewQuotation]);
  return (
    <>
      <div className="newQuotation-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="newQuotation-tit">
            <p>Create New Quotation</p>
            <div
              onClick={() => {
                setshowNewQuotation(false);
              }}
              className="close-newQuotation-container"
            >
              <svg
                className="circle-x-logo-newQuotation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
              <nav>Close</nav>
            </div>
          </div>
          <div className="newQuotation-input-container">
            <div className="newQuotation-input-box">
              <label htmlFor="quotation_id">
                Quotation ID {"(Auto Generate)"}
              </label>
              <input
                id="quotation_id"
                type="text"
                placeholder="Quotation ID"
                disabled
              />
            </div>
            <div className="newQuotation-input-box">
              <label htmlFor="quotation_type">
                Quotation Type<sup>*</sup>
              </label>
              <select id="quotation_type" required>
                <option value="">Select Quotation Type</option>
                <option value="Standard">Standard</option>
                <option value="Blanket">Blanket</option>
                <option value="Service">Service</option>
              </select>
            </div>
          </div>
          <div className="newQuotation-input-container">
            <div className="newQuotation-input-box">
              <label htmlFor="quotation_date">
                Quotation Date<sup>*</sup>
              </label>
              <input
                id="quotation_date"
                type="date"
                placeholder="Select Date"
                required
              />
            </div>
            <div className="newQuotation-input-box">
              <label htmlFor="expiry_date">
                Expiry Date<sup>*</sup>
              </label>
              <input
                id="expiry_date"
                type="date"
                placeholder="Select Date"
                required
              />
            </div>
          </div>
          <div className="newQuotation-input-container">
            <div className="newQuotation-input-box">
              <label htmlFor="customer_name">
                Customer Name<sup>*</sup>
              </label>
              <select id="customer_name" required>
                <option value="">Select Customer</option>
                {customer_name.map((ele, ind) => (
                  <option key={ind} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className="newQuotation-input-box">
              <label htmlFor="customer_po_referance">
                Customer PO Reference
              </label>
              <input
                id="customer_po_referance"
                type="text"
                placeholder="PO-45678"
              />
            </div>
          </div>
          <div className="newQuotation-input-container">
            <div className="newQuotation-input-box">
              <label htmlFor="sales_rep">
                Sales Rep<sup>*</sup>
              </label>
              <select id="sales_rep" required>
                <option value="">Select Salesperson</option>
                {sales_rep.map((ele, ind) => (
                  <option key={ind} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className="newQuotation-input-box">
              <label htmlFor="currency">
                Currency<sup>*</sup>
              </label>
              <select id="currency" required>
                <option value="">Select Currency</option>
                {currency.map((ele, ind) => (
                  <option key={ind} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="newQuotation-input-container">
            <div className="newQuotation-input-box">
              <label htmlFor="payment_terms">Payment Terms</label>
              <select id="payment_terms">
                <option value="">Select Terms</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 45">Net 45</option>
                <option value="Net 60">Net 60</option>
                <option value="Advance">Advance</option>
                <option value="COD">COD</option>
              </select>
            </div>

            <div className="newQuotation-input-box">
              <label htmlFor="delivery_terms">Delivery Terms</label>
              <input
                id="delivery_terms"
                type="text"
                placeholder="Enter Delivery Terms"
              />
            </div>
          </div>
          <nav className="newQuotation-subtit">
            Quotation Items<sup>*</sup>
          </nav>
          <div className="newQuotation-table-container">
            <table>
              <thead className="newQuotation-table-head">
                <tr>
                  <th>Product ID</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Unit Price</th>
                  <th>Discount {"(%)"}</th>
                  <th>Tax {"(%)"}</th>
                  <th id="newQuotation-table-width">Expected Delivery</th>
                </tr>
              </thead>
              <tbody className="newQuotation-table-body">
                {[...Array(numberOfQuotationList)].map((ele, ind) => (
                  <QuotationList
                    key={ind}
                    unique_key={ind}
                    product_ids={product_ids}
                    quotation_table_data={quotation_table_data}
                    setQuotationList_data={setQuotationList_data}
                  />
                ))}
                <tr>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setQuotationList_data((prev) => {
                        return [
                          ...prev,
                          { unique_key: numberOfQuotationList },
                        ];
                      });
                      setnumberOfQuotationList((prev) => ++prev);
                    }}
                  >
                    Add
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
}
