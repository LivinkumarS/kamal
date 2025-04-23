import React, { useState, useEffect } from "react";
import "./createNewProduct.css";
import CategoryInput from "./categoryInput";

export default function createNewProduct() {
  const [ApiCustomdata, setApiCustomdata] = useState({});
  const [categoryApi, setcategoryApi] = useState([]);
  const [tax_codeApi, settax_codeAip] = useState([]);
  const [uomApi, setuomApi] = useState([]);
  const [warehouseApi, setwarehouseApi] = useState([]);

  const [newProductcustom, setnewProductCustom] = useState({
    category: "",
    tax_code: "",
    uom: "",
    warehouse: "",
  });

  const [newProductData, setnewProductData] = useState({
    product_id_code: "",
    product_name: "",
    product_type: "",
    description: "",
    category: "",
    tax_code: "",
    unit_price: "",
    discount: "",
    uom: "",
    quantity: "",
    stock_level: "",
    reorder_level: "",
    warehouse: "",
  });

  const dropDownData = {
    categoryApi: ["Electronics", "Fashon", "Grocery"],
    tax_codeApi: ["GST-18%", "no Tax"],
    uomApi: ["box(12)", "Set(45)"],
    warehouseApi: ["main Warehouse"],
  };
  useEffect(() => {
    setApiCustomdata(dropDownData);
  }, []);
  useEffect(() => {
    if (Object.keys(ApiCustomdata).length > 0) {
      setcategoryApi(ApiCustomdata.categoryApi);
      settax_codeAip(ApiCustomdata.tax_codeApi);
      setuomApi(ApiCustomdata.uomApi);
      setwarehouseApi(ApiCustomdata.warehouseApi);
    }
  }, [ApiCustomdata]);

  {
    // const handleCustomChange = (e) => {
    //   const selected = e.target.value;
    //   setnewProductData((prev) => ({
    //     ...prev,
    //     category: selected,
    //   }));
    //   if (selected !== "Custom") {
    //     setnewProductCustom("");
    //   }
    // };
  }

  const handleCustomChange = (e) => {
    const { id, value } = e.target;

    setnewProductData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Only reset if new dropdown value is NOT "Custom"
    if (value !== "Custom") {
      setnewProductCustom((prev) => ({
        ...prev,
        [`custom_${id}`]: "", // Clear only the relevant field
      }));
    }
  };

  const handleNewProjectDataChange = (e) => {
    setnewProductData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  console.log(newProductData);

  const handleNewProjectCustomData = (e) => {
    setnewProductCustom((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  console.log(newProductcustom);

  return (
    <>
      <div className="newProduct-container">
        <form>
          <div className="newProduct-title">
            <p>Create New Product</p>
          </div>
          <div className="createNewProduct-cointainer">
            <div className="newProduct-photo-cointainer">
              <div className="newProduct-photo-bg">
                <nav className="newProduct-photo-bg-up">
                  <svg
                    className="newProject-camera-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M220.6 121.2L271.1 96 448 96l0 96-114.8 0c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24L64 192l0-64 128 0c9.9 0 19.7-2.3 28.6-6.8zM0 128L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L271.1 32c-9.9 0-19.7 2.3-28.6 6.8L192 64l-32 0 0-16c0-8.8-7.2-16-16-16L80 32c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
                  </svg>
                  <p>Uploard Photo</p>
                </nav>
                <nav className="newProduct-photo-bg-down">
                  <div>
                    <nav>
                      <p className="newProduct-photo-title">Allowed Formate</p>
                      <p className="newProduct-photo-content">
                        JPG,JPEG,and PNG
                      </p>
                    </nav>
                    <nav>
                      <p className="newProduct-photo-title">Max File Size</p>
                      <p className="newProduct-photo-content">2MB</p>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>
            <div className="createNewProduct-right">
              <div className="createNewProduct-box">
                <label htmlFor="product_id_code">Product ID/Code</label>
                <input
                  id="product_id_code"
                  type="text"
                  value={newProductData.product_id_code}
                  onChange={handleNewProjectDataChange}
                  placeholder="eg:PRO-10021"
                />
              </div>
              <div className="createNewProduct-box">
                <label htmlFor="product_name">Product Name</label>
                <input
                  id="product_name"
                  type="text"
                  value={newProductData.product_name}
                  onChange={handleNewProjectDataChange}
                  placeholder="Headphones"
                />
              </div>
              <div className="createNewProduct-box">
                <label htmlFor="product_type">Product Type</label>
                <select
                  id="product_type"
                  value={newProductData.product_type}
                  onChange={handleNewProjectDataChange}
                  name="productType"
                >
                  <option value="">Select Product Type</option>
                  <option value="Goods">Goods</option>
                  <option value="Services">Services</option>
                  <option value="Combo">Combo</option>
                </select>
              </div>

              <div className="createNewProduct-box">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  value={newProductData.description}
                  onChange={handleNewProjectDataChange}
                  type="text"
                  placeholder="Text Area"
                />
              </div>
            </div>
          </div>
          <div className="newProduct-title">
            <div>Create New Product</div>
            <nav>+ Add New Category</nav>
          </div>
          <div className="NewProduct-input-cointainer">
            <div className="newProduct-box">
              <label htmlFor="category">Category</label>
              <CategoryInput handleCustomChange={handleCustomChange} newProductData={newProductData} handleNewProjectCustomData={handleNewProjectCustomData} newProductcustom={newProductcustom} id={"category"} categoryApi={categoryApi} />
            </div>

            <div className="newProduct-box">
              <label>Sub Category</label>
              <input />
            </div>
          </div>
          <div className="newProduct-title">
            <div>Pricing & Tax</div>
            <nav>+ Add New</nav>
          </div>
          <div className="NewProduct-input-cointainer">
            <div className="newProduct-box">
              <label htmlFor="unit_price">Unit Price</label>
              <input
                className="increment-decrement-newProduct"
                type="number"
                id="unit_price"
                placeholder="Enter Price"
                value={newProductData.unit_price}
                onChange={handleNewProjectDataChange}
              />
            </div>
            <div className="newProduct-box">
              <label htmlFor="discount">Discount</label>
              <input
                className="increment-decrement-newProduct"
                type="number"
                id="discount"
                value={newProductData.discount}
                onChange={handleNewProjectDataChange}
                placeholder="e.g., 10%"
              />
            </div>
            <div className="newProduct-box">
              <label htmlFor="tax_code">Tax Code</label>
              <CategoryInput handleCustomChange={handleCustomChange} newProductData={newProductData} handleNewProjectCustomData={handleNewProjectCustomData} newProductcustom={newProductcustom} id={"tax_code"} categoryApi={tax_codeApi} />
            </div>
          </div>
          <div className="newProduct-title">
            <div>Unit & Stock</div>
            <nav>+ Add New</nav>
          </div>
          <div className="NewProduct-input-cointainer">
            <div className="newProduct-box">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                className="increment-decrement-newProduct"
                value={newProductData.quantity}
                onChange={handleNewProjectDataChange}
                placeholder="e.g., 50"
              />
            </div>
            <div className="newProduct-box">
              <label htmlFor="uom">UOM {"(Unit Of Measurement)"}</label>
              <CategoryInput handleCustomChange={handleCustomChange} newProductData={newProductData} handleNewProjectCustomData={handleNewProjectCustomData} newProductcustom={newProductcustom} id={"uom"} categoryApi={uomApi} />
            </div>
          </div>
          <div className="newProduct-title">
            <div>Inventory Details</div>
            <nav>+ Add New</nav>
          </div>
          <div className="NewProduct-input-cointainer">
            <div className="newProduct-box">
              <label htmlFor="stock_level">Stock Level</label>
              <input
                className="increment-decrement-newProduct"
                type="number"
                id="stock_level"
                placeholder="e.g., 120"
                value={newProductData.stock_level}
                onChange={handleNewProjectDataChange}
              />
            </div>
            <div className="newProduct-box">
              <label htmlFor="reorder_level">Reorder Level</label>
              <input
                className="increment-decrement-newProduct"
                type="number"
                id="reorder_level"
                value={newProductData.reorder_level}
                onChange={handleNewProjectDataChange}
                placeholder="e.g., 30"
              />
            </div>
            <div className="newProduct-box">
              <label htmlFor="warehouse">Warehouse</label>
              <CategoryInput handleCustomChange={handleCustomChange} newProductData={newProductData} handleNewProjectCustomData={handleNewProjectCustomData} newProductcustom={newProductcustom} id={"warehouse"} categoryApi={warehouseApi} />
            </div>
          </div>
          <div className="newProduct-title">
            <div>Product Attributes & Specifications</div>
            <nav>+ Add New</nav>
          </div>
          
        </form>
      </div>
    </>
  );
}
