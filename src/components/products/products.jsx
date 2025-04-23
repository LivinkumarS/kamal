import React, { useState, useEffect } from "react";
import "./products.css";
import CreateNewProduct from "../create-new-product/createNewProduct";

export default function products() {
  const [ApiProduct, setApiProduct] = useState({});
  const [product, setproduct] = useState([]);

  const [productCurrentPage, setproductCurrentPage] = useState(1);
  const productRowsPerPage = 10;

  const [showNewProduct, setshowNewProduct] = useState(false);

  const productFromAPI = {
    product: [
      {
        product_id: "CVB001",
        product_name: "T-Shirt",
        type: "Goods",
        category: "Apparel",
        states: "Active",
        stock_level: "120",
        price: "400",
      },
      {
        product_id: "CVB002",
        product_name: "T-Shirt",
        type: "Goods",
        category: "Apparel",
        states: "Active",
        stock_level: "120",
        price: "400",
      },
      {
        product_id: "CVB003",
        product_name: "T-Shirt",
        type: "Goods",
        category: "Apparel",
        states: "Inactive",
        stock_level: "120",
        price: "400",
      },
      {
        product_id: "CVB004",
        product_name: "T-Shirt",
        type: "Goods",
        category: "Apparel",
        states: "Inactive",
        stock_level: "120",
        price: "400",
      },
      {
        product_id: "CVB005",
        product_name: "T-Shirt",
        type: "Goods",
        category: "Apparel",
        states: "Inactive",
        stock_level: "120",
        price: "400",
      },
    ],
  };
  useEffect(() => {
    setApiProduct(productFromAPI);
  }, []);
  useEffect(() => {
    if (Object.keys(ApiProduct).length > 0) {
      setproduct(ApiProduct.product);
    }
  }, [ApiProduct]);

  //   page calculation
  const totalPages = Math.ceil(product.length / productRowsPerPage);
  console.log(totalPages);

  const currentData = product.slice(
    (productCurrentPage - 1) * productRowsPerPage,
    productCurrentPage * productRowsPerPage
  );

  // Handle next page
  const handleNext = () => {
    if (productCurrentPage < totalPages) {
      setproductCurrentPage((prevPage) => prevPage + 1);
    }
  };
  // Handle previous page
  const handlePrev = () => {
    if (productCurrentPage > 1) {
      setproductCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {showNewProduct ? (
        <div className="createNewProduct-btn">
          <CreateNewProduct />
        </div>
      ) : (
        <div className="product-container">
          <div className="product-header">
            <p>Product Master</p>{" "}
            <button onClick={() => setshowNewProduct(true)}>
              + Add New Product
            </button>
          </div>
          <div className="product-search-box">
            <svg
              className="product-search-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input placeholder="Search by ID number..." />
          </div>
          <p className="product-clearfilter">Clear Filter</p>
          <div className="product-search-category">
            <div className="product-input-box">
              <lable>Category</lable>
              <input type="text" />
            </div>
            <div className="product-input-box">
              <lable>Brand</lable>
              <input type="text" />
            </div>
            <div className="product-input-box">
              <lable>Status</lable>
              <input type="text" />
            </div>
            <div className="product-input-box">
              <lable>Product Type</lable>
              <input type="text" />
            </div>
          </div>
          <div className="product-table-cointainer">
            <table>
              <thead className="product-thead">
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Stock Level</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="product-tbody">
                {currentData.length > 0 ? (
                  currentData.map((ele, ind) => (
                    <tr key={ind}>
                      <td>{ele.product_id}</td>
                      <td>{ele.product_name}</td>
                      <td>{ele.type}</td>
                      <td>{ele.category}</td>
                      <td>
                        <div className="productStatus-active">{ele.states}</div>
                      </td>
                      <td>{ele.stock_level}</td>
                      <td>{ele.price}</td>
                      <td className="product-action-cointainer">
                        <svg
                          // onClick={() => {
                          //   showEditItem(ele.id);
                          // }}
                          className="edit-product-logo"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                        </svg>
                        <svg
                          // onClick={() => {
                          //   deleteItem(ind);
                          // }}
                          className="delete-product-logo"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>No Data Found</p>
                )}
              </tbody>
            </table>
          </div>
          <nav className="table-bottem">
            <p className="num-entries">Showing {currentData.length} entries</p>
            <div className="manage-control-box">
              <button
                className="manage-btn"
                onClick={handlePrev}
                disabled={productCurrentPage === 1}
              >
                Prev
              </button>
              <nav className="num-page">
                {" "}
                Page {productCurrentPage} of {totalPages}{" "}
              </nav>
              <button
                className="manage-btn"
                onClick={handleNext}
                disabled={productCurrentPage === totalPages}
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
