import React, { useState, useEffect } from "react";
import "./quotationCRM.css";

export default function quotation() {
  return (
    <>
      <div className="quotationCRM-container">
        <div className="quotationCRM-header">
          <p>Custom Master</p>
          <button>+ Add New Quotation</button>
        </div>
      </div>
    </>
  );
}
