import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./createNewSales.css";
import SalesListItems from "./salesListItems";
import { toast } from "react-toastify";
export default function createNewSales({ salesStatus, setSalesStatus }) {
  const prevPage = useNavigate();
  const [ApiSales, setApiSales] = useState({});
  const [prevsalesData, setprevsalesData] = useState([]);
  const [sales_table_data, setSales_table_data] = useState([]);
  const [sales_rep, setSales_rep] = useState([]);

  const salesFromApi = {
    prevsalesData: [
      {
        customer_name: "Sans",
        customer_id: "ABC001",
        billing_address: "123, A colony,Chennai",
        shipping_address: "123, B colony,Chennai",
        email_id: "ASD@gmail.com",
        phone_number: "1234567890",
      },
      {
        customer_name: "Mandy",
        customer_id: "ABC002",
        billing_address: "123, A colony,madurai",
        shipping_address: "123, B colony,AP",
        email_id: "Mandy@gmail.com",
        phone_number: "8838511968",
      },
      {
        customer_name: "Rose",
        customer_id: "ABC003",
        billing_address: "123, A colony,Coimbatore",
        shipping_address: "123, B colony,salem",
        email_id: "rose@gmail.com",
        phone_number: "8888867890",
      },
    ],
    sales_table_data: [
      {
        product_id: "PRO001",
        product_name: "E-shirt",
        stock_level: "50",
        uom: ["Set (5)", "Box (5)"],
        unit_price: "120",
        discount: "5",
        tax: ["18", "12"],
      },
      {
        product_id: "PRO002",
        product_name: "M-shirt",
        stock_level: "40",
        uom: ["Set (5)", "Box (5)"],
        unit_price: "130",
        discount: "5",
        tax: ["18", "12"],
      },
      {
        product_id: "PRO003",
        product_name: "T-shirt",
        stock_level: "30",
        uom: ["Set (5)", "Box (5)"],
        unit_price: "150",
        discount: "5",
        tax: ["18", "12"],
      },
    ],
    sales_rep: ["Sans", "rose", "Mandy"],
  };

  const [salesData, setSalesData] = useState({
    sales_order_id: "",
    order_date: "",
    sales_rep: "",
    order_type: "",
    customer_name: "",
    customer_id: "",
    billing_address: "",
    shipping_address: "",
    email_id: "",
    phone_number: "",
    payment_method: "",
    currency: "",
    due_date: "",
    terms_conditions: "",
    shipping_method: "",
    expected_delivery: "",
    tracking_number: "",
    internal_notes: "",
    customer_notes: "",
    global_discount: 0,
    shipping_charges: 0,
  });
  const [salesBtn, setSalesBtn] = useState({
    cancel: true,
    cancel_order: true,
    save_draft: true,
    submit: true,
    Generate_po: true,
    pdf: true,
    email: true,
    generate_delivery_note: true,
    generate_invoice: true,
  });

  //sales product data

  const [numOfSalesList, setnumOfSalesList] = useState(1);
  const [SalesList_data, setSalesList_data] = useState([{ unique_key: 0 }]);
  useEffect(() => {
    setApiSales(salesFromApi);
  }, []);
  useEffect(() => {
    if (Object.keys(ApiSales).length > 0) {
      setprevsalesData(ApiSales.prevsalesData);
      setSales_table_data(ApiSales.sales_table_data);
      setSales_rep(ApiSales.sales_rep);
    }
  }, [ApiSales]);

  const handleSalesDataChange = (e) => {
    setSalesData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  useEffect(() => {
    const selected = salesData.customer_name;

    if (!selected) {
      setSalesData({
        customer_name: "",
        customer_id: "",
        billing_address: "",
        shipping_address: "",
        email_id: "",
        phone_number: "",
      });
      return;
    }

    const customer = prevsalesData.find(
      (ele) => ele.customer_name === selected
    );

    if (customer) {
      setSalesData((prev) => ({
        ...prev,
        customer_id: customer.customer_id,
        billing_address: customer.billing_address,
        shipping_address: customer.shipping_address,
        email_id: customer.email_id,
        phone_number: customer.phone_number,
      }));
    }
  }, [salesData.customer_name, prevsalesData]);

  //button state

  const handleSaveDraftState = (e) => {
    e.preventDefault();
    setSalesStatus("Draft");
    toast.success("Sales Item in Save Draft State");
  };
  const handleSubmitState = (e) => {
    e.preventDefault();
    setSalesStatus("Submitted");
    toast.success("Sales Item in Submitted State");
  };

  const handleGenerateState = (e) => {
    e.preventDefault();
    setSalesStatus("Generate(PO)");
    toast.success("Sales Item in Generate(PO) State");
  };
  const handleCancelOrderState = (e) => {
    e.preventDefault();
    const okCancel = window.confirm("Are you sure you want to Cancer Order ?");
    if (okCancel) {
      setSalesStatus("Cancelled");
      toast.success("Sales Item in Cancelled State");
    }
  };

  function productTotal(ind) {
    const data = SalesList_data[ind];
    const quantity = parseFloat(data.quantity) || 0;
    const unitPrice = parseFloat(data.unit_price) || 0;
    const discount = parseFloat(data.discount) || 0;
    const tax = parseFloat(data.tax) || 0;

    const subtotal = quantity * unitPrice;
    const taxAmount = (subtotal * tax) / 100;
    const taxedAmount = subtotal + taxAmount;

    const discountAmount = (taxedAmount * discount) / 100;
    const total = taxedAmount - discountAmount;

    return total.toFixed(2); // Total after tax, then discount
  }
  function calculateSubtotal() {
    const total = SalesList_data.reduce((acc, data) => {
      const quantity = parseFloat(data.quantity) || 0;
      const unitPrice = parseFloat(data.unit_price) || 0;
      const discount = parseFloat(data.discount) || 0;
      const tax = parseFloat(data.tax) || 0;

      const subtotal = quantity * unitPrice;
      const taxAmount = (subtotal * tax) / 100;
      const taxedAmount = subtotal + taxAmount;
      const discountAmount = (taxedAmount * discount) / 100;
      const total = taxedAmount - discountAmount;

      return acc + total;
    }, 0);

    return total.toFixed(2);
  }

  function calculateTaxSummery() {
    const taxTotal = SalesList_data.reduce((acc, data) => {
      const quantity = parseFloat(data.quantity) || 0;
      const unitPrice = parseFloat(data.unit_price) || 0;
      const tax = parseFloat(data.tax) || 0;

      const subtotal = quantity * unitPrice;
      const taxAmount = (subtotal * tax) / 100;

      return acc + taxAmount;
    }, 0);

    return taxTotal.toFixed(2);
  }
  function calculateGrandTotal() {
    const subtotal = parseFloat(calculateSubtotal()) || 0;
    const discount =
      (subtotal * (parseFloat(salesData.global_discount) || 0)) / 100;
    const shipping = parseFloat(salesData.shipping_charges) || 0;

    const grandTotal = subtotal - discount + shipping;

    return grandTotal.toFixed(2); // or `return Number(grandTotal.toFixed(2))` if you want a number
  }

  function roundedGrandTotal() {
    const total = calculateGrandTotal();
    const roundedtotal = total % 1 > 0.5 ? Math.ceil(total) : Math.floor(total);
    return roundedtotal;
  }
  function roundedvalue() {
    const rounded_total = roundedGrandTotal();
    const unrounded_total = parseFloat(calculateGrandTotal()) || 0;
    return (rounded_total - unrounded_total).toFixed(2);
  }

  //delete salese product
  function deleteSalesProduct(ind) {
    const okDel = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (okDel) {
      setSalesList_data((prev) => prev.filter((_, index) => index !== ind));
      setnumOfSalesList((prev) => prev - 1);
      toast.success("Product Item deleted!");
    }
  }
  console.log(salesStatus);

  return (
    <>
      <div className="createNewSales-container">
        <form>
          <div className="createNewSales-head">
            <nav>
              <p>New Sales Order</p>
              <h3>Status:Draft</h3>
            </nav>
            <div>
              <button className="createNewSales-active-btn">
                Generate Delivery Note
              </button>
              <button className="createNewSales-inactive-btn">
                Generate Invoice
              </button>
              <div
                className="createNewSales-close"
                onClick={() => prevPage(-1)}
              >
                <svg
                  className="createNewSales-circle-x-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
                <p>Close</p>
              </div>
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="sales_order_id">
                Sales Order ID {`(Auto Generate)`}
              </label>
              <input
                id="sales_order_id"
                type="text"
                value={salesData.sales_order_id}
                onChange={handleSalesDataChange}
                placeholder="Auto Generate"
                disabled
              />
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="order_date">
                Order Date<sup>*</sup>
              </label>
              <input
                id="order_date"
                value={salesData.order_date}
                onChange={handleSalesDataChange}
                type="date"
                required
              />
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="sales_rep">
                Sales Rep<sup>*</sup>
              </label>
              <select
                id="sales_rep"
                value={salesData.sales_rep}
                onChange={handleSalesDataChange}
                required
              >
                <option value="">Select Sales Rep</option>
                {sales_rep.map((ele, ind) => (
                  <option key={ind} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="order_type">
                Order Type<sup>*</sup>
              </label>
              <select
                id="order_type"
                value={salesData.order_type}
                onChange={handleSalesDataChange}
                required
              >
                <option value="">Select Order</option>
                <option value="Standard">Standard</option>
                <option value="Rush">Rush</option>
                <option value="Backorder">Backorder</option>
              </select>
            </div>
          </div>
          <nav className="createNewSales-subtit">Customer Information</nav>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="customer_name">
                Customer Name<sup>*</sup>
              </label>
              <select
                id="customer_name"
                value={salesData.customer_name}
                onChange={handleSalesDataChange}
              >
                <option value="">Select Customer</option>
                {prevsalesData.map((ele, ind) => (
                  <option key={ind} value={ele.customer_name}>
                    {ele.customer_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="customer_id">
                Customer ID {`(Auto Generate)`}
              </label>

              <input
                id="customer_id"
                value={salesData.customer_id}
                onChange={handleSalesDataChange}
                type="text"
                placeholder="Auto Generate"
                disabled
              />
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="billing_address">
                Billing Address<sup>*</sup>
              </label>
              <input
                id="billing_address"
                value={salesData.billing_address}
                onChange={handleSalesDataChange}
                type="text"
                placeholder="Enter Address"
                required
              />
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="shipping_address">
                Shipping Address<sup>*</sup>
              </label>
              <input
                id="shipping_address"
                type="text"
                value={salesData.shipping_address}
                onChange={handleSalesDataChange}
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="email_id">
                Email ID<sup>*</sup>
              </label>
              <input
                id="email_id"
                value={salesData.email_id}
                onChange={handleSalesDataChange}
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="phone_number">
                Phone Number<sup>*</sup>
              </label>
              <input
                id="phone_number"
                value={salesData.phone_number}
                onChange={handleSalesDataChange}
                className="increment-decrement-createNewSales"
                type="number"
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
          <nav className="createNewSales-subtit">Payment Details</nav>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="payment_method">Payment Method</label>
              <select
                id="payment_method"
                value={salesData.payment_method}
                onChange={handleSalesDataChange}
              >
                <option value="">Select Payment</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="COD">COD</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="currency">
                Currency<sup>*</sup>
              </label>
              <select
                id="currency"
                value={salesData.currency}
                onChange={handleSalesDataChange}
                required
              >
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="IND">IND</option>
                <option value="GBP">GBP</option>
                <option value="SGD">SGD</option>
              </select>
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="due_date">Due Date</label>
              <input
                id="due_date"
                value={salesData.due_date}
                onChange={handleSalesDataChange}
                type="date"
              />
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="terms_conditions">Terms & Conditions</label>
              <input
                id="terms_conditions"
                value={salesData.terms_conditions}
                onChange={handleSalesDataChange}
                type="text"
                placeholder="Enter Terms & Conditions"
                required
              />
            </div>
          </div>
          <nav className="createNewSales-subtit">Logistics & Notes</nav>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="shipping_method">Shipping Method</label>
              <select
                id="shipping_method"
                value={salesData.shipping_method}
                onChange={handleSalesDataChange}
              >
                <option value="">Select Payment</option>
                <option value="DHL">DHL</option>
                <option value="FedEx">FedEx</option>
                <option value="UPS">UPS</option>
                <option value="Local Courier">Local Courier</option>
              </select>
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="expected_delivery">Expected Delivery</label>
              <input
                id="expected_delivery"
                value={salesData.expected_delivery}
                onChange={handleSalesDataChange}
                type="date"
              />
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="tracking_number">Tracking Number</label>
              <input
                id="tracking_number"
                type="text"
                value={salesData.tracking_number}
                onChange={handleSalesDataChange}
                placeholder="Enter tracking number"
              />
            </div>
            <div className="createNewSales-input-box">
              <label htmlFor="internal_notes">Internal Notes</label>
              <input
                id="internal_notes"
                type="text"
                value={salesData.internal_notes}
                onChange={handleSalesDataChange}
                placeholder="Enter Internal Notes"
              />
            </div>
          </div>
          <div className="createNewSales-input-container">
            <div className="createNewSales-input-box">
              <label htmlFor="customer_notes">Customer Notes</label>
              <input
                id="customer_notes"
                type="text"
                value={salesData.customer_notes}
                onChange={handleSalesDataChange}
                placeholder="Enter Customer Notes"
              />
            </div>
          </div>
          <nav className="createNewSales-subtit">
            Order Line Items<sup>*</sup>
          </nav>
          <div className="createNewSales-table-container">
            <table>
              <thead className="createNewSales-table-head">
                <tr>
                  <th id="createNewSales-table-smallwidth">#</th>
                  <th>Product Name</th>
                  <th id="createNewSales-table-minwidth">Product ID</th>
                  <th id="createNewSales-table-minwidth">In Stock</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Unit Price</th>
                  <th>Tax {"(%)"}</th>
                  <th>Discount {"(%)"}</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="createNewSales-table-body">
                {[...Array(numOfSalesList)].map((ele, ind) => (
                  <SalesListItems
                    key={ind}
                    unique_key={ind}
                    sales_table_data={sales_table_data}
                    setSales_table_data={setSales_table_data}
                    setSalesList_data={setSalesList_data}
                    //function
                    productTotal={productTotal}
                    deleteSalesProduct={deleteSalesProduct}
                    //currency
                    salesData={salesData}
                  />
                ))}

                <tr>
                  <td></td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSalesList_data((prev) => {
                          return [...prev, { unique_key: numOfSalesList }];
                        });
                        setnumOfSalesList((prev) => ++prev);
                      }}
                    >
                      + Add Item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav className="createNewSales-subtit">Order Summary</nav>
          <div className="createNewSales-totals-container">
            <nav>
              <h5>Subtotal</h5>
              <p> {calculateSubtotal()}</p>
            </nav>
            <nav>
              <h5>Global Discount {"(%)"}</h5>
              <input
                type="number"
                value={salesData.global_discount}
                onChange={(e) =>
                  setSalesData((prev) => ({
                    ...prev,
                    global_discount: parseFloat(e.target.value) || 0,
                  }))
                }
              />
            </nav>
            <nav>
              <h5>Tax Summary</h5>
              <p> {calculateTaxSummery()}</p>
            </nav>
            <nav>
              <h5>
                Shipping Charges{""}
                {salesData.currency === "IND" && <span>{`(₹)`}</span>}
                {salesData.currency === "USD" && <span>{`($)`}</span>}
                {salesData.currency === "GBP" && <span>{`(£)`}</span>}
                {salesData.currency === "SGD" && <span>{`(S$)`}</span>}
                {salesData.currency === "ERU" && <span>{`(€)`}</span>}
              </h5>
              <input
                type="number"
                value={salesData.shipping_charges}
                onChange={(e) =>
                  setSalesData((prev) => ({
                    ...prev,
                    shipping_charges: parseFloat(e.target.value) || 0,
                  }))
                }
              />
            </nav>
            <nav>
              <h5>Rounding Adjustment</h5>
              <p>{roundedvalue()}</p>
            </nav>
            <nav className="createNewSales-totals-container-bg">
              <h5>Grand Total</h5>
              <p>
                {salesData.currency === "IND" && <span>₹</span>}
                {salesData.currency === "USD" && <span>$</span>}
                {salesData.currency === "GBP" && <span>£</span>}
                {salesData.currency === "SGD" && <span>S$</span>}
                {salesData.currency === "ERU" && <span>€</span>}

                {roundedGrandTotal()}
              </p>
            </nav>
          </div>
          <div className="createNewSales-btn-container">
            <button
              className={
                salesStatus === "Submitted" || salesStatus === "Submitted(PA)"
                  ? "createNewSales-order-active-btn"
                  : "createNewSales-inactive-btn"
              }
              onClick={handleCancelOrderState}
            >
              Cancel Order
            </button>
            <nav>
              <button
                className="createNewSales-cancel-btn"
                onClick={(e) => {
                  e.preventDefault();
                  prevPage(-1);
                }}
              >
                Cancel
              </button>
              <button
                className={
                  salesStatus === "Draft" ||
                  salesStatus === "" ||
                  salesStatus === "Purchased" ||
                  salesStatus === "Partially Purchased" ||
                  salesStatus === "Ready to submit"
                    ? "createNewSales-active-btn"
                    : "createNewSales-completed-btn"
                }
                onClick={handleSaveDraftState}
              >
                Save Draft
              </button>
              <button onClick={handleSubmitState}>Submit</button>
              <button
                className={
                  salesStatus === "Cancelled" || salesStatus === "Purchased"
                    ? "createNewSales-inactive-btn"
                    : "createNewSales-active-btn"
                }
                onClick={handleGenerateState}
              >
                Generate {`(PO)`}
              </button>

              <svg
                className={"newQuotation-pdf-mail-activelogo"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 24"
                fill="none"
              >
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M0.600098 2.4C0.600098 1.76348 0.852954 1.15303 1.30304 0.702944C1.75313 0.252856 2.36358 0 3.0001 0L16.1313 0L21.4001 5.2688V21.6C21.4001 22.2365 21.1472 22.847 20.6972 23.2971C20.2471 23.7471 19.6366 24 19.0001 24H3.0001C2.36358 24 1.75313 23.7471 1.30304 23.2971C0.852954 22.847 0.600098 22.2365 0.600098 21.6V2.4ZM4.6001 9.6H2.2001V17.6H3.8001V14.4H4.6001C5.23662 14.4 5.84707 14.1471 6.29715 13.6971C6.74724 13.247 7.0001 12.6365 7.0001 12C7.0001 11.3635 6.74724 10.753 6.29715 10.3029C5.84707 9.85286 5.23662 9.6 4.6001 9.6ZM11.0001 9.6H8.6001V17.6H11.0001C11.6366 17.6 12.2471 17.3471 12.6972 16.8971C13.1472 16.447 13.4001 15.8365 13.4001 15.2V12C13.4001 11.3635 13.1472 10.753 12.6972 10.3029C12.2471 9.85286 11.6366 9.6 11.0001 9.6ZM15.0001 17.6V9.6H19.8001V11.2H16.6001V12.8H18.2001V14.4H16.6001V17.6H15.0001Z"
                />
              </svg>
              <svg
                className={"newQuotation-pdf-mail-activelogo"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 8.825C10.0833 8.825 10.171 8.81233 10.263 8.787C10.355 8.76167 10.4423 8.72433 10.525 8.675L17.6 4.25C17.7333 4.16667 17.8333 4.06267 17.9 3.938C17.9667 3.81333 18 3.67567 18 3.525C18 3.19167 17.8583 2.94167 17.575 2.775C17.2917 2.60833 17 2.61667 16.7 2.8L10 7L3.3 2.8C3 2.61667 2.70833 2.61267 2.425 2.788C2.14167 2.96333 2 3.209 2 3.525C2 3.69167 2.03333 3.83767 2.1 3.963C2.16667 4.08833 2.26667 4.184 2.4 4.25L9.475 8.675C9.55833 8.725 9.646 8.76267 9.738 8.788C9.83 8.81333 9.91733 8.82567 10 8.825Z" />
              </svg>
            </nav>
          </div>
        </form>
      </div>
    </>
  );
}
