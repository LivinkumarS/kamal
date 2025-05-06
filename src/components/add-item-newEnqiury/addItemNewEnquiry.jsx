import React, { useState, useEffect } from "react";

export default function addItemNewEnquiry({
  setshowAddItem,
  editAddItem,
  editItem,
  seteditItem,
}) {
  const [addItems, setaddItems] = useState({
    item_code: "",
    product_description: "",
    cost_price: "",
    salling_price: "",
    quantity: "",
    total_amount: "",
  });
  useEffect(() => {
    setaddItems((prev) => {
      return { ...prev, ...editItem };
    });
  }, [editItem]);

  const handlAddItemChanges = (e) => {
    setaddItems((perv) => {
      return { ...perv, [e.target.id]: e.target.value };
    });
  };

  console.log(addItems);

  function handleAddItemSubmit(e) {
    e.preventDefault();
    setaddItems({
      item_code: "",
      product_description: "",
      cost_price: "",
      salling_price: "",
      quantity: "",
      total_amount: "",
    });
    setshowAddItem(false);
  }

  return (
    <div
      className="w-full h-full overflow-x-hidden overflow-y-scroll p-[25px]"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "gray transparent",
      }}
    >
      <p className="text-center text-[rgba(35,78,112,1)] text-lg font-bold">
        {editAddItem ? "Edit" : "Add New"} Product
      </p>
      <div className="w-full">
        <form
          onSubmit={handleAddItemSubmit}
          className="w-full flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-[3px]">
            <label
              htmlFor="item_code"
              className="text-sm font-medium text-[rgba(42,42,42,1)]"
            >
              Item Code<sup className="text-[red]">*</sup>
            </label>
            <input
              id="item_code"
              value={addItems.item_code}
              onChange={handlAddItemChanges}
              type="text"
              placeholder="Enter Code"
              required
              className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
            />
          </div>

          <div className="w-full flex flex-col gap-[3px]">
            <label
              htmlFor="product_description"
              className="text-sm font-medium text-[rgba(42,42,42,1)]"
            >
              Product Description<sup className="text-[red]">*</sup>
            </label>
            <input
              id="product_description"
              value={addItems.product_description}
              onChange={handlAddItemChanges}
              type="text"
              placeholder="Text Area"
              required
              className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
            />
          </div>

          <div className="w-full flex flex-row gap-5 max-[800px]:flex-col">
            <div className="w-6/12 flex flex-col gap-[3px] max-[800px]:w-full">
              <label
                htmlFor="cost_price"
                className="text-sm font-medium text-[rgba(42,42,42,1)]"
              >
                Cost Price<sup className="text-[red]">*</sup>
              </label>
              <input
                id="cost_price"
                value={addItems.cost_price}
                onChange={handlAddItemChanges}
                type="number"
                placeholder="Enter Cost Price"
                required
                className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
              />
            </div>

            <div className="w-6/12 flex flex-col gap-[3px] max-[800px]:w-full">
              <label
                htmlFor="salling_price"
                className="text-sm font-medium text-[rgba(42,42,42,1)]"
              >
                Salling Price<sup className="text-[red]">*</sup>
              </label>
              <input
                id="salling_price"
                value={addItems.salling_price}
                onChange={handlAddItemChanges}
                type="number"
                placeholder="Enter Salling Price"
                required
                className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-[3px]">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-[rgba(42,42,42,1)]"
            >
              Quantity<sup className="text-[red]">*</sup>
            </label>
            <input
              id="quantity"
              value={addItems.quantity}
              onChange={handlAddItemChanges}
              type="number"
              placeholder="0"
              required
              className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
            />
          </div>

          <div className="w-full flex flex-col gap-[3px]">
            <label
              htmlFor="total_amount"
              className="text-sm font-medium text-[rgba(42,42,42,1)]"
            >
              Total<sup className="text-[red]">*</sup>
            </label>
            <input
              id="total_amount"
              value={addItems.total_amount}
              onChange={handlAddItemChanges}
              type="text"
              placeholder="Total Amount"
              required
              className="min-w-[195px] bg-[rgba(249,249,249,1)] text-sm font-normal text-[rgba(1,19,52,1)] px-[15px] py-2 rounded-[10px] border-2 border-solid border-[rgba(226,226,226,1)] focus:bg-white focus:border-[rgba(35,78,112,1)] placeholder:text-[rgba(176,176,176,1)]"
            />
          </div>

          <div className="w-full flex gap-5 justify-end items-center max-[330px]:flex-col max-[330px]:items-start max-[330px]:gap-2.5">
            <nav
              onClick={() => setshowAddItem(false)}
              className="text-base font-semibold text-[rgba(35,78,112,1)] bg-white cursor-pointer px-[18px] py-[5px] rounded-md border-2 border-solid border-[rgba(26,94,148,1)]"
            >
              Cancel
            </nav>
            <button
              type="submit"
              className="bg-[rgba(35,78,112,1)] text-base font-semibold text-white cursor-pointer px-[18px] py-[5px] rounded-md border-2 border-solid border-[rgba(26,94,148,1)]"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
