import React from "react";
import "./createNewProduct.css";

export default function createNewProduct() {
  return (
    <>
      <div className="newProduct-container">
        <div className="newProduct-title">Create New Product</div>
        <div className="createNewProduct-cointainer">
          <div className="photo-cointainer">
            <img src="https://m.media-amazon.com/images/I/51T6MpbpQLL.jpg" />
          </div>
          <div className="createNewProduct-right">
            <div className="createNewProduct-box">
              <label>Product ID/Code</label>
              <input />
            </div>
            <div className="createNewProduct-box">
              <label>Product Name</label>
              <input />
            </div>
            <div className="createNewProduct-box">
              <label>Product Type</label>
              <input />
            </div>
            <div className="createNewProduct-box">
              <label>Description</label>
              <input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
