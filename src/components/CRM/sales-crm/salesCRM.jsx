import React, { useState, useEffect } from "react";
import "./salesCRM.css";

export default function salesCRM() {
  const [ApiSales, setApiSales] = useState({});
  const [salesData, setSalesData] = useState([]);
  const salesFromApi = {
    salesData: [
      {
        sales_order_id: "SO-0001",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Draft",
        stock_status: "In stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0002",
        order_type: "Standard",
        customer_name: " Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Draft",
        stock_status: "Insufficient Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0003",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Purchased",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0001",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Partially Purchased",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
    ],
  };
  useEffect(() => {});
  return (
    <>
      <div className="salesCRM-container">
        <div className="salesCRM-header">
          <p>Sales Order</p>
          <button>+ New Sales Order</button>
        </div>
        <div className="salesCRM-search-box">
          <label htmlFor="searchByID">
            <svg
              className="salesCRM-search-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </label>
          <input id="searchByID" placeholder="Search by ID,Name..." />
        </div>
        <div className="salesCRM-clearfilter">
          <p>Clear Filter</p>
        </div>
        <div className="salesCRM-search-category">
          <div className="salesCRM-input-box">
            <label htmlFor="status">Status</label>
            <select id="status">
              <option value="">All Statuses</option>
              <option value="Draft">Draft</option>
              <option value="Purchased">Purchased</option>
              <option value="Submitted(PA)">Submitted(PA)</option>
              <option value="Delivered">Delivered</option>
              <option value="Partially Delivered">Partially Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="salesCRM-input-box">
            <label htmlFor="quotation_type">Quotation Type</label>
            <select id="quotation_type">
              <option value="">All Types</option>
              <option value="Standard">Standard</option>
              <option value="Rush">Rush</option>
              <option value="Backorder">Backorder</option>
            </select>
          </div>

          <div className="salesCRM-input-box">
            <label htmlFor="sales_rep">Sales Rep</label>
            <select id="sales_rep">
              <option value="">All</option>
              {/* {searchSalseRep.map((ele, ind) => (
                <option key={ind} value={ele}>
                  {ele}
                </option>
              ))} */}
            </select>
          </div>
        </div>
        <div className="salesCRM-table-cointainer">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Sales Order ID</th>
                <th>Order Type</th>
                <th>Customer Name</th>
                <th>Sales Rep</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Stock status</th>
                <th>Grand Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
