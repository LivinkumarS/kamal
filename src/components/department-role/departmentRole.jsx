import React, { useState, useEffect } from "react";
import "./departmentRole.css";
import CreateDepartmentRole from "../create-department-role/createDepartmentRole";
import CreateNewRole from "../create-newrole/createNewRole";

export default function departmentRole() {
  const [departmentAPI, setdepartmentAPI] = useState({});
  const [departmentTableData, setdepartmentTableData] = useState([]);
  const [departmentCurrentPage, setdepartmentCurrentPage] = useState(1); // Default: Page 1
  const departmentRowsPerPage = 5;

  const [showNewRole, setshowNewRole] = useState(false);

  const [showDepartmentRole, setshowDepartmentRole] = useState(false);
  const [editDepartmentRole, setEditDepartmentRole] = useState(false);

  const departmentFromAPI = {
    departmentTableData: [
      {
        code: "#STA123",
        department_name: "Sales",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA122",
        department_name: "Purchase",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA124",
        department_name: "HR",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA125",
        department_name: "analist",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA122",
        department_name: "digital",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA124",
        department_name: "marketing",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
      {
        code: "#STA124",
        department_name: "maintaines",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur.",
      },
    ],
  };

  useEffect(() => {
    setdepartmentAPI(departmentFromAPI);
  }, []);

  useEffect(() => {
    if (Object.keys(departmentAPI).length > 0) {
      setdepartmentTableData(departmentAPI.departmentTableData);
    }
  }, [departmentAPI]);

  // Calculate total pages
  const totalPages = Math.ceil(
    departmentTableData.length / departmentRowsPerPage
  );

  // Get data for current page
  const currentData = departmentTableData.slice(
    (departmentCurrentPage - 1) * departmentRowsPerPage,
    departmentCurrentPage * departmentRowsPerPage
  );

  // Handle next page
  const handleNext = () => {
    if (departmentCurrentPage < totalPages) {
      setdepartmentCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle previous page
  const handlePrev = () => {
    if (departmentCurrentPage > 1) {
      setdepartmentCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {showNewRole ? (
        <div className="createNewRole-btn">
          <CreateNewRole setshowNewRole={setshowNewRole} />
        </div>
      ) : (
        <>
          {showDepartmentRole && (
            <div className="create-department-role-btn">
              <CreateDepartmentRole
                setshowDepartmentRole={setshowDepartmentRole}
                setshowNewRole={setshowNewRole}
              />
            </div>
          )}
          <div
            className={`department-role-container ${
              showDepartmentRole && "blur-department"
            }`}
          >
            <p>Department & Roles</p>
            <div className="department-header">
              <p className="department-headleft">
                Efficiently manage and organize Department & Roles with easy.
              </p>
              <div className="department-headright">
                <div className="department-search-cointainer">
                  <input id="department-focus" placeholder="Search users" />
                  <label htmlFor="department-focus">
                    <svg
                      className="search-logo-department"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </label>
                </div>
                <button onClick={() => setshowDepartmentRole(true)}>
                  + Create New
                </button>
              </div>
            </div>
            <div className="department-table-container">
              <table>
                <thead className="department-thead">
                  <tr>
                    <th>Code</th>
                    <th>Department Name</th>
                    <th id="department-width-description">Description</th>
                    <th id="department-width-action">Action</th>
                  </tr>
                </thead>
                <tbody className="department-tbody">
                  {currentData.map((ele, ind) => (
                    <tr key={ind}>
                      <td>{ele.code}</td>
                      <td onClick={() => setshowDepartmentRole(true)}>
                        {ele.department_name}
                      </td>
                      <td id="department-width-description">
                        {ele.description}
                      </td>
                      <td id="department-width-action">
                        <svg
                          className="dot-logo-department"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                        >
                          <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav className="table-bottem-department">
              <p className="num-entries-department">
                Showing {currentData.length} entries
              </p>
              <div className="department-control-box">
                <button
                  className="department-btn"
                  onClick={handlePrev}
                  disabled={departmentCurrentPage === 1}
                >
                  Prev
                </button>
                <nav className="num-page-department">
                  {" "}
                  Page {departmentCurrentPage} of {totalPages}{" "}
                </nav>
                <button
                  className="department-btn"
                  onClick={handleNext}
                  disabled={departmentCurrentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
