import React, { useState, useEffect } from "react";
import "./manageUsers.css";
import CreateUser from "../create-user-manageuser/createUser";

export default function manageUsers() {
  const [manageAPIdata, setmanageAPIdata] = useState({});
  const [tableData, settableDate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Default: Page 1
  const rowsPerPage = 10; // Show 10 rows per page

  const [showCreateUser, setshowCreateUser] = useState(false);

  const manageFromAPI = {
    tableData: [
      {
        Email: "Kmamahhhhhhhhhhhzxcvvh@gmail.com",
        FirstName: "kamalsslivinkishoreharishnaveen",
        LastName: "Rajsssssss",
        Role: "UI des",
      },
      {
        Email: "Kmamil.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
      {
        Email: "Kmama@gmail.com",
        FirstName: "kamal",
        LastName: "Raj",
        Role: "UI",
      },
    ],
  };

  useEffect(() => {
    setmanageAPIdata(manageFromAPI);
  }, []);
  useEffect(() => {
    if (Object.keys(manageAPIdata).length > 0) {
      settableDate(manageAPIdata.tableData);
    }
  }, [manageAPIdata]);

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Get data for current page
  const currentData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {showCreateUser && (
        <div className="createuser-btn">
          <CreateUser
            showCreateUser={showCreateUser}
            setshowCreateUser={setshowCreateUser}
          />
        </div>
      )}
      <div className={`manageusers-container ${showCreateUser && "blur"}`}>
        <p>Manage Users</p>
        <div className="manage-header">
          <p className="manage-headleft">
            Efficiently manage and organize user account with easy.
          </p>
          <div className="manage-headright">
            <div className="manage-search-cointainer">
              <input id="manage-focus" placeholder="Search users" />
              <label htmlFor="manage-focus">
                <svg
                  className="search-logo-manageuser"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </label>
            </div>

            <button onClick={() => setshowCreateUser(true)}>
              + Create New
            </button>
          </div>
        </div>
        <div className="manage-table-container">
          <table>
            <thead className="manage-thead">
              <tr>
                <th>Email</th>
                <th id="managa-width-firstname">First Name</th>
                <th id="managa-width-lastname">Last Name</th>
                <th id="managa-width-role">Role</th>
                <th id="manage-width-action">Action</th>
              </tr>
            </thead>
            <tbody className="manage-tbody">
              {currentData.map((ele, ind) => (
                <tr key={ind}>
                  <td>
                    <abbr title={ele.Email}>
                      {ele.Email.length < 18
                        ? ele.Email
                        : ele.Email.slice(0, 18) + "..."}
                    </abbr>
                  </td>
                  <td id="managa-width-firstname">
                    <abbr title={ele.FirstName}>
                      {ele.FirstName.length < 16
                        ? ele.FirstName
                        : ele.FirstName.slice(0, 16) + "..."}
                    </abbr>
                  </td>
                  <td id="managa-width-lastname">
                    <abbr title={ele.LastName}>
                      {ele.LastName.length < 16
                        ? ele.LastName
                        : ele.LastName.slice(0, 16) + "..."}
                    </abbr>
                  </td>
                  <td id="managa-width-role">
                    <abbr title={ele.Role}>
                      {ele.Role.length < 20
                        ? ele.Role
                        : ele.Role.slice(0, 20) + "..."}
                    </abbr>
                  </td>
                  <td id="manage-width-action">
                    <svg
                      className="dot-logo-manage"
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
        <nav className="table-bottem">
          <p className="num-entries">Showing {currentData.length} entries</p>
          <div className="manage-control-box">
            <button
              className="manage-btn"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <nav className="num-page">
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </nav>
            <button
              className="manage-btn"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
