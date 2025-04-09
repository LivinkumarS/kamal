import React, { useState, useEffect } from "react";
import "./createNewRole.css";

export default function CreateNewRole({ setshowNewRole }) {
  const [inputRoleAccess, setinputRoleAccess] = useState({
    dashboard: {
      fullAccess: false,
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
    task: {
      fullAccess: false,
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
    projectTracker: {
      fullAccess: false,
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
    onboarding: {
      fullAccess: false,
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
    attendance: {
      fullAccess: false,
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
  });

  console.log(inputRoleAccess);

  const handleInputRoleChange = (e, pageName) => {
    setinputRoleAccess((prev) => {
      return {
        ...prev,
        [pageName]: { ...prev[pageName], [e.target.id]: e.target.checked },
      };
    });
  };

  return (
    <div className="create-newrole-cointainer">
      <div className="create-role-head">
        <p>New Roles</p>
        <svg
          className="x-logo-create-role"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={() => setshowNewRole(false)}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <form onSubmit={() => setshowNewRole(false)}>
        <div className="create-role-content">
          <div className="create-role-box">
            <label htmlFor="role_name">
              Role Name<sup>*</sup>
            </label>
            <input
              id="role_name"
              name="role_name"
              type="text"
              placeholder="Enter Role"
              value={inputRoleAccess.role_name}
              onChange={handleInputRoleChange}
              required
            />
          </div>
          <div className="create-role-box">
            <label htmlFor="description">
              Description<sup>*</sup>
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Enter Text"
              value={inputRoleAccess.description}
              onChange={handleInputRoleChange}
              required
            />
          </div>
        </div>
        <div className="create-role-content">
          <div className="role-permission-title">
            <p>Permission</p>
            <nav>Reset</nav>
          </div>
        </div>
        <div className="create-role-table">
          <table>
            <thead className="ceate-role-head">
              <tr>
                <th>Menus</th>
                <th>Full Access</th>
                <th>View</th>
                <th>Create</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="ceate-role-body">
              {[
                "dashboard",
                "task",
                "projectTracker",
                "onboarding",
                "attendance",
              ].map((page, ind) => (
                <tr key={ind}>
                  <td>
                    {page
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </td>
                  <td id="check-role">
                    <input
                      id="fullAccess"
                      type="checkbox"
                      value={inputRoleAccess[page].fullAccess}
                      onChange={(e) => {
                        handleInputRoleChange(e, page);
                      }}
                    />
                  </td>
                  <td id="check-role">
                    <input
                      id="view"
                      type="checkbox"
                      value={inputRoleAccess[page].view}
                      onChange={(e) => {
                        handleInputRoleChange(e, page);
                      }}
                    />
                  </td>
                  <td id="check-role">
                    <input
                      id="create"
                      type="checkbox"
                      value={inputRoleAccess[page].create}
                      onChange={(e) => {
                        handleInputRoleChange(e, page);
                      }}
                    />
                  </td>
                  <td id="check-role">
                    <input
                      id="edit"
                      type="checkbox"
                      value={inputRoleAccess[page].edit}
                      onChange={(e) => {
                        handleInputRoleChange(e, page);
                      }}
                    />
                  </td>
                  <td id="check-role">
                    <input
                      id="delete"
                      type="checkbox"
                      value={inputRoleAccess[page].delete}
                      onChange={(e) => {
                        handleInputRoleChange(e, page);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="create-role-submit-container">
          <nav>
            <button
              className="create-role-cancel"
              onClick={(e) => {
                e.preventDefault();
                setshowNewRole(false);
              }}
            >
              Cancel
            </button>
            <button type="submit" className="create-role-save">
              Save
            </button>
          </nav>
        </div>
      </form>
    </div>
  );
}
