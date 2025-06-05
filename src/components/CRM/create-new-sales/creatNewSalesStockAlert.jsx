import React from "react";
import "./createNewSales.css";

export default function creatNewSalesStockAlert({
  setStockAlert,
  setSalesStatus,
  purchase_order,
  hasLowStock,
}) {
  return (
    <>
      <div className="createNewSales-stock-container">
        <h3>
          <span>Stock Alert </span>– Insufficient Stock
        </h3>
        <p>
          Some products in your sales order have insufficient stock. You can
          generate a purchase order to refill the stock or proceed with partial
          delivery for available items.
        </p>
        <nav>
          <button
            className="createNewSales-cancel-btn"
            onClick={(e) => {
              e.preventDefault;
              setStockAlert(false);
            }}
          >
            Cancel
          </button>
          <button
            className={
              purchase_order === "Purchase Ordered"
                ? "createNewSales-completed-btn"
                : "createNewSales-active-btn "
            }
          >
            Generate Purchase Order
          </button>
          <button
            className={
              hasLowStock
                ? "createNewSales-active-btn"
                : "createNewSales-inactive-btn"
            }
            onClick={(e) => {
              e.preventDefault;
              setSalesStatus("Submitted(PD)");
              setStockAlert(false);
            }}
          >
            Proceed with Partial Delivery
          </button>
        </nav>
      </div>
    </>
  );
}
