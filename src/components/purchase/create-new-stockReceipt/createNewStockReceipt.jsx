import React, { useState } from "react";
import "./createNewStockReceipt.css";
import { useNavigate } from "react-router-dom";

export default function () {
  const prevpg = useNavigate();
  const [stockReceiptStatus, setStockReceiptstatus] = useState("");
  return (
    <>
      <div className="cerateNewStock-container">
        <div className="cerateNewStock-head">
          <nav>
            <p>
              {stockReceiptStatus === ""
                ? "New Stock Receipt"
                : "Stock Receipt"}
            </p>
            {stockReceiptStatus !== "" && (
              <h3
                className={
                  stockReceiptStatus === "Draft"
                    ? "cerateNewStock-Status-draft"
                    : stockReceiptStatus === "Submitted"
                    ? "cerateNewStock-Status-Submitted"
                    : stockReceiptStatus === "Cancelled"
                    ? "cerateNewStock-Status-Cancelled"
                    : stockReceiptStatus === "Returned"
                    ? "cerateNewStock-Status-Returned"
                    : ""
                }
              >
                Status: {stockReceiptStatus}
              </h3>
            )}
          </nav>
          <div>
            <button
              className={
                stockReceiptStatus === "Submitted"
                  ? "cerateNewStock-active-btn"
                  : "cerateNewStock-inactive-btn"
              }
            >
              Stock Return
            </button>
            <nav
              className="cerateNewStock-close"
              onClick={(e) => {
                e.preventDefault();
                prevpg(-1);
              }}
            >
              <svg
                className="cerateNewStock-circle-x-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
              <p>Close</p>
            </nav>
          </div>
        </div>
        <div className="cerateNewStock-input-container">
          <div className="cerateNewStock-input-box">
            <label htmlFor="grn_id">GRN ID {`(Auto Generate)`}</label>
            <input
              id="grn_id"
              type="text"
              placeholder="Auto Generate"
              disabled
            />
          </div>
          <div className="cerateNewStock-input-box">
            <label htmlFor="po_referance_id">
              PO Reference ID<sup>*</sup>
            </label>
            <select id="po_referance_id" required>
              <option value="">Select Referance</option>
              <option value="one">One</option>
            </select>
          </div>
        </div>
        <div className="cerateNewStock-input-container">
          <div className="cerateNewStock-input-box">
            <label htmlFor="received_date">Received Date*</label>
            <input id="received_date" type="date" required />
          </div>
          <div className="cerateNewStock-input-box">
            <label htmlFor="">
              Supplier Name<sup>*</sup>
            </label>
            <input type="text" id="" required />
          </div>
        </div>
      </div>
    </>
  );
}
