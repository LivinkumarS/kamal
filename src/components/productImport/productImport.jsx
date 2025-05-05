import React, { useState, useRef, useEffect } from "react";
import "./productImport.css";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const REQUIRED_FIELDS = [
  "Product ID",
  "Product Name",
  "Type",
  "Category",
  "Status",
  "Stock Level",
  "Price",
];

export default function ProductImport({ setshowProductImport }) {
  const [files, setFiles] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [validRowCount, setValidRowCount] = useState(0);
  const [invalidRowCount, setInvalidRowCount] = useState(0);
  const [skippedRowCount, setSkippedRowCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const inpRef = useRef(null);

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      const ext = file.name.split(".").pop().toLowerCase();
      if (ext === "csv") {
        reader.readAsText(file);
      } else {
        reader.readAsBinaryString(file);
      }
    });
  };

  const processFiles = async () => {
    if (files.length === 0) return;

    let allValidRows = [];
    let totalValid = 0;
    let totalInvalid = 0;
    let totalSkipped = 0;

    const seenProductIDs = new Set();
    const seenProductNames = new Set();

    for (const file of files) {
      try {
        const ext = file.name.split(".").pop().toLowerCase();
        const content = await readFile(file);
        let rows = [];

        if (ext === "csv") {
          const result = Papa.parse(content, {
            header: true,
            skipEmptyLines: true,
          });
          rows = result.data;
        } else if (ext === "xlsx" || ext === "xls") {
          const workbook = XLSX.read(content, { type: "binary" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          rows = XLSX.utils.sheet_to_json(worksheet);
        } else {
          throw new Error("Unsupported file format");
        }

        for (const row of rows) {
          const hasAllRequired = REQUIRED_FIELDS.every(
            (key) => row[key] !== undefined && row[key] !== ""
          );

          if (!hasAllRequired) {
            totalInvalid++;
            continue;
          }

          const pid = row["Product ID"];
          const pname = row["Product Name"];

          if (seenProductIDs.has(pid) || seenProductNames.has(pname)) {
            totalSkipped++;
            continue;
          }

          seenProductIDs.add(pid);
          seenProductNames.add(pname);
          allValidRows.push(row);
          totalValid++;
        }
      } catch (err) {
        console.error(`Error processing ${file.name}`, err);
      }
    }

    setProcessedData(allValidRows);
    setValidRowCount(totalValid);
    setInvalidRowCount(totalInvalid);
    setSkippedRowCount(totalSkipped);
  };

  useEffect(() => {
    processFiles();
  }, [files]);

  const fileChange = (e) => {
    const selected = Array.from(e.target.files);
    const existingNames = new Set(files.map((f) => f.name));
    const newUnique = selected.filter((f) => !existingNames.has(f.name));
    setFiles((prev) => [...prev, ...newUnique]);
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
    setIsDragging(false);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragLeave = () => setIsDragging(false);

  const handleReset = () => {
    setFiles([]);
    setProcessedData([]);
    setValidRowCount(0);
    setInvalidRowCount(0);
    setSkippedRowCount(0);
    inpRef.current.value = null;
  };

  const handleImportFileSubmit = (e) => {
    e.preventDefault();

    console.log("✅ Final Object List:", processedData);
  };
  return (
    <>
      <div
        className="productImport-container"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <form onSubmit={handleImportFileSubmit}>
          <div className="productImport-head">
            <p>Import Products from CSV/Excel</p>
            <nav onClick={() => setshowProductImport(false)}>
              <svg
                className="circle-x-logo-import"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
              <p>Close</p>
            </nav>
          </div>

          <div className="productImport-downloadTemplate-container">
            <nav className="productImport-downloadTemplate-title">
              1. Download Template :
            </nav>
            <a
              href="/sample_products.csv"
              download
              className="productImport-download-btn-container"
            >
              <svg
                className="import-download-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <span>Download Sample Template (CSV/XLSX)</span>
            </a>

            <div>
              <svg
                className="import-tickbox-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p>Ensure all mandatory fields are filled.</p>
            </div>

            <div>
              <svg
                className="import-download-blue-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <p>
                After importing, review and update product data for completeness
                and accuracy.
              </p>
            </div>
          </div>

          <div className="productImport-upload-container">
            <input
              type="file"
              hidden
              multiple
              ref={inpRef}
              onChange={fileChange}
              accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
            <p>2. Upload File :</p>
            <nav className="productImport-uploadbox-container">
              <nav>
                <button
                  className="productImport-reser-img-btn"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </nav>
              <div
                className="productImport-uploadbox"
                onClick={() => inpRef.current.click()}
                style={
                  isDragging
                    ? { backgroundColor: "seagreen", opacity: ".5" }
                    : {}
                }
              >
                <svg
                  className="productImport-filo-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0v128h128L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24v-102.1l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" />
                </svg>
                <p>Choose or Drag and drop your file here</p>

                {files.length > 0 && (
                  <p style={{ fontSize: "10px", textAlign: "center" }}>
                    {files.map((file, ind) => {
                      return <span key={ind}>{file.name}, </span>;
                    })}
                  </p>
                )}

                <nav>
                  Supported formats<div>.csv , .xlsx</div>
                </nav>
              </div>
            </nav>
          </div>

          <div className="productImport-validation-container">
            <div className="productImport-validation-tit">
              <svg
                className="import-validation-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p>Validation</p>
            </div>
            <nav>
              <table>
                <thead className="productImport-validation-head">
                  <tr>
                    <th>Valid Rows</th>
                    <th>Invalid Rows</th>
                    <th>Skipped</th>
                  </tr>
                </thead>
                <tbody className="productImport-validation-body">
                  <tr>
                    <td>{validRowCount}</td>
                    <td>{invalidRowCount}</td>
                    <td>{skippedRowCount}</td>
                  </tr>
                </tbody>
              </table>
            </nav>
          </div>
          <div className="productImport-info-container">
            <nav className="productImport-info-tit">
              <svg
                className="productImport-alert-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              <p>No file uploaded yet</p>
            </nav>
            <div>
              <nav className="productImport-info-tit">
                <svg
                  className="productImport-alert-red-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <p>Errors Detected:</p>
              </nav>
              <p>1.Missing "UOM" in Row 10, 12, 13</p>
              <p>1.Missing "UOM" in Row 10, 12, 13</p>
              <p>1.Missing "UOM" in Row 10, 12, 13</p>
            </div>
            <div>
              <nav className="productImport-info-tit">
                <svg
                  className="productImport-skipped-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
                <p>Skipped Row:</p>
              </nav>
              <p>1.Missing "UOM" in Row 10, 12, 13</p>
            </div>
          </div>
          <div className="productImport-checkbox">
            <input type="checkbox" required />
            <p>Import validated rows only</p>
          </div>
          <div className="productImport-submit-container">
            <nav
              onClick={() => {
                setshowProductImport(false);
                setFiles([]);
              }}
            >
              Cancel
            </nav>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
