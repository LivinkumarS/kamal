import React, { useState, useEffect } from "react";
import "./salesCRM.css";

export default function salesCRM({
  currentPage,
  setCurrentPage,
  salesStatus,
  setSalesStatus,
}) {
  const [salesCurrentPage, setSalesCurrentPage] = useState(1);
  const salesRowPerPage = 10;

  const [filter, setFilter] = useState({
    status: "",
    order: "",
    sales_rep: "",
  });

  const [buttonAct, setButtonAct] = useState({
    chechbox: {},
    purchase_order: false,
    delivery_invoice: false,
    action: {
      view_details: false,
      generate_purchase_order: false,
      generate_delivery_note: false,
      generate_invoice: false,
    },
  });

  const [ApiSales, setApiSales] = useState({});
  const [salesData, setSalesData] = useState([]);
  const [sales_rep, setSales_rep] = useState([]);
  const salesFromApi = {
    salesData: [
      {
        sales_order_id: "SO-0001",
        order_type: "Rush",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Draft",
        stock_status: "In stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0002",
        order_type: "Rush",
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
        sales_order_id: "SO-0004",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Partially Purchased",
        stock_status: "Partially In Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0005",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Ready to Submit",
        stock_status: "",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0006",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Submitted",
        stock_status: "",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0007",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Submitted(PA)",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00013",
        order_type: "Standard",
        customer_name: "Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Submitted",
        stock_status: "",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00014",
        order_type: "Standard",
        customer_name: "John",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Submitted(PA)",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00015",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Submitted(PA)",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },

      {
        sales_order_id: "SO-0008",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Partially Delivered",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-0009",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Delivered",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00010",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Cancelled",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00011",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Cancelled",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
      {
        sales_order_id: "SO-00012",
        order_type: "Standard",
        customer_name: "John Deo",
        sales_rep: "Mandy",
        order_date: "05-05-2000",
        status: "Cancelled",
        stock_status: "Waiting for Stock",
        grand_total: "₹50,000",
      },
    ],
    sales_rep: ["Mandy", "Saala", "John"],
  };

  useEffect(() => {
    setApiSales(salesFromApi);
  }, []);
  useEffect(() => {
    if (Object.keys(ApiSales).length > 0) {
      setSalesData(ApiSales.salesData);
      setSales_rep(ApiSales.sales_rep);
    }
  }, [ApiSales]);

  useEffect(() => {
    const selectedOrders = salesData.filter(
      (order) => buttonAct.chechbox[order.sales_order_id]
    );
    const hasMultiple = selectedOrders.length > 1;
    // Validate same customer
    const firstCustomer = selectedOrders[0]?.customer_name;
    const sameCustomer =
      hasMultiple &&
      selectedOrders.every((order) => order.customer_name === firstCustomer);
    // Delivery Invoice condition: all must be Submitted or Submitted(PA)
    const allSubmitted =
      hasMultiple &&
      selectedOrders.every(
        (order) =>
          order.status === "Submitted" || order.status === "Submitted(PA)"
      );
    // Purchase Order condition: all must be in valid status
    const validPurchaseStatuses = [
      "Draft",
      "Partially purchased",
      "Ready to submit",
      "Submitted(PA)",
    ];
    const allValidForPO =
      hasMultiple &&
      selectedOrders.every((order) =>
        validPurchaseStatuses.includes(order.status)
      );
    // Set button state
    setButtonAct((prev) => ({
      ...prev,
      delivery_invoice:
        selectedOrders.length > 0 && sameCustomer && allSubmitted,
      purchase_order:
        selectedOrders.length > 0 && !sameCustomer && allValidForPO,
    }));
  }, [buttonAct.chechbox, salesData]);
  //action

  // checkbox
  const handlecheckbox = (e, ele) => {
    const { id, checked } = e.target;
    setButtonAct((prev) => ({
      chechbox: {
        ...prev.chechbox,
        [ele.sales_order_id]: checked,
      },
    }));
  };
  // console.log(buttonAct);

  //page calculation
  const totalPages = Math.ceil(salesData.length / salesRowPerPage);

  const currentData = salesData.slice(
    (salesCurrentPage - 1) * salesRowPerPage,
    salesCurrentPage * salesRowPerPage
  );

  const handleNext = () => {
    if (salesCurrentPage < totalPages) {
      setSalesCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (salesCurrentPage > 1) {
      setSalesCurrentPage((prev) => prev - 1);
    }
  };
  const handleClearFilter = () => {
    setFilter({
      status: "",
      order: "",
      sales_rep: "",
    });
  };

  return (
    <>
      <div className="salesCRM-container">
        <div className="salesCRM-header">
          <p>Sales Order</p>
          <button
            onClick={() => {
              setCurrentPage("createNewSales");
            }}
          >
            + New Sales Order
          </button>
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
          <p onClick={handleClearFilter}>Clear Filter</p>
        </div>
        <div className="salesCRM-search-category">
          <div className="salesCRM-input-box">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={filter.status}
              onChange={(e) => {
                setFilter((prev) => ({ ...prev, status: e.target.value }));
              }}
            >
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
            <label htmlFor="order_type">Order Type</label>
            <select
              id="order_type"
              value={filter.order}
              onChange={(e) => {
                setFilter((prev) => ({ ...prev, order: e.target.value }));
              }}
            >
              <option value="">All Types</option>
              <option value="Standard">Standard</option>
              <option value="Rush">Rush</option>
              <option value="Backorder">Backorder</option>
            </select>
          </div>
          <div className="salesCRM-input-box">
            <label htmlFor="sales_rep">Sales Rep</label>
            <select
              id="sales_rep"
              value={filter.sales_rep}
              onChange={(e) => {
                setFilter((prev) => ({ ...prev, sales_rep: e.target.value }));
              }}
            >
              <option value="">All</option>
              {sales_rep.map((ele, ind) => (
                <option key={ind} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="salesCRM-table-title">
          <p>Select orders to enable actions</p>
          <nav>
            <button
              className={
                buttonAct.purchase_order === true
                  ? "salesCRM-active-btn"
                  : "salesCRM-inactive-btn"
              }
              disabled={buttonAct.purchase_order === true ? false : true}
            >
              Generate Purchase order
            </button>
            <button
              className={
                buttonAct.delivery_invoice === true
                  ? "salesCRM-active-btn"
                  : "salesCRM-inactive-btn"
              }
              disabled={buttonAct.delivery_invoice === true ? false : true}
            >
              Generate Delivery Note
            </button>
            <button
              className={
                buttonAct.delivery_invoice === true
                  ? "salesCRM-active-btn"
                  : "salesCRM-inactive-btn"
              }
              disabled={buttonAct.delivery_invoice === true ? false : true}
            >
              Generate Invoice
            </button>
          </nav>
        </div>
        <div className="salesCRM-table-cointainer">
          <table>
            <thead className="salesCRM-table-head">
              <tr>
                <th></th>
                <th className="salesCRM-table-maxwidth">Sales Order ID</th>
                <th className="salesCRM-table-minwidth">Order Type</th>
                <th className="salesCRM-table-largwidth">Customer Name</th>
                <th className="salesCRM-table-minwidth">Sales Rep</th>
                <th className="salesCRM-table-minwidth">Order Date</th>
                <th>
                  <div className="salesCRM-status-filter">
                    Status
                    <nav className="salesCRM-filter-box">
                      <p>Newest First</p>
                      <p>Oldest First</p>
                      <p>Progressing {`(Draft → Cancelled)`}</p>
                      <p>Reverse Progressing{`(Cancelled → Draft)`} </p>
                    </nav>
                    <svg
                      className="salesCRM-status-filter-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                    >
                      <path
                        d="M3.66683 12.3346H0.333496L5.3335 17.3346V0.667969H3.66683V12.3346ZM8.66683 3.16797V17.3346H10.3335V5.66797H13.6668L8.66683 0.667969V3.16797Z"
                        fill="#234E70"
                      />
                    </svg>
                  </div>
                </th>
                <th className="salesCRM-table-minwidth">Stock status</th>
                <th className="salesCRM-table-minwidth">Grand Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="salesCRM-table-body">
              {currentData.length > 0
                ? currentData.map((ele, ind) => (
                    <tr key={ind}>
                      <td>
                        <input
                          className="salesCRM-table-check"
                          type="checkbox"
                          onChange={(e) => handlecheckbox(e, ele)}
                          checked={!!buttonAct.chechbox[ele.sales_order_id]}
                        />
                      </td>
                      <td>{ele.sales_order_id}</td>
                      <td>{ele.order_type}</td>
                      <td>{ele.customer_name}</td>
                      <td>{ele.sales_rep}</td>
                      <td>{ele.order_date}</td>
                      <td>
                        <p
                          className={`salesCRM-Status ${
                            ele.status === "Draft"
                              ? "salesCRM-Status-draft"
                              : ele.status === "Purchased"
                              ? "salesCRM-Status-Purchased"
                              : ele.status === "Partially Purchased"
                              ? "salesCRM-Status-Partially-purchased"
                              : ele.status === "Ready to Submit"
                              ? "salesCRM-Status-ready-to-submit"
                              : ele.status === "Submitted"
                              ? "salesCRM-Status-submitted"
                              : ele.status === "Submitted(PA)"
                              ? "salesCRM-Status-SubmittedPA"
                              : ele.status === "Partially Delivered"
                              ? "salesCRM-Status-Partially-Delivered "
                              : ele.status === "Delivered"
                              ? "salesCRM-Status-Delivered"
                              : ele.status === "Cancelled"
                              ? "salesCRM-Status-Cancelled"
                              : ""
                          }`}
                        >
                          {ele.status}
                        </p>
                      </td>
                      <td>
                        <nav
                          className={
                            ele.stock_status === "In stock"
                              ? "salesCRM-in-stock"
                              : ele.stock_status === "Insufficient Stock"
                              ? "salesCRM-Insufficient-Stock"
                              : ele.stock_status === "Waiting for Stock"
                              ? "salesCRM-Waiting-for-Stock"
                              : ele.stock_status === "Partially In Stock"
                              ? "salesCRM-Partially"
                              : ""
                          }
                        >
                          {ele.stock_status === "" ? "-" : ele.stock_status}
                        </nav>
                      </td>
                      <td>{ele.grand_total}</td>
                      <td id="salesCRM-table-action">
                        <nav className="salesCRM-dot-container">
                          <button disabled={ele.status !== "" ? false : true}>
                            View details
                          </button>
                          <button
                            disabled={
                              ele.status === "Draft" ||
                              ele.status === "Ready to Submit" ||
                              ele.status === "Partially Purchased" ||
                              ele.status === "Submitted" ||
                              ele.status === "Submitted(PA)"
                                ? false
                                : true
                            }
                          >
                            Generate Purchase order
                          </button>
                          <button
                            disabled={
                              ele.status === "Submitted" ||
                              ele.status === "Submitted(PA)"
                                ? false
                                : true
                            }
                          >
                            Generate Delivery Note
                          </button>
                          <button
                            disabled={
                              ele.status === "Partially Delivered" ||
                              ele.status === "Delivered" ||
                              ele.status === "Submitted" ||
                              ele.status === "Submitted(PA)"
                                ? false
                                : true
                            }
                          >
                            Generate Invoice
                          </button>
                        </nav>
                        <svg
                          className="salesCRM-delete-logo"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z"
                            fill="#2A2A2A"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))
                : "No Data"}
            </tbody>
          </table>
        </div>
        <nav className="salesCRM-table-bottem">
          <p className="salesCRM-num-entries">
            Showing {currentData.length} entries
          </p>
          <div className="salesCRM-manage-control-box">
            <button
              className="salesCRM-manage-btn"
              onClick={handlePrev}
              disabled={salesCurrentPage === 1}
            >
              Prev
            </button>
            <nav className="salesCRM-num-page">
              {" "}
              Page {salesCurrentPage} of {totalPages}{" "}
            </nav>
            <button
              className="salesCRM-manage-btn"
              onClick={handleNext}
              disabled={salesCurrentPage === totalPages}
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
