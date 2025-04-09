import React, { useState, useEffect } from "react";
import "./createDepartmentRole.css";

export default function createDepartmentRole({
  setshowDepartmentRole,
  setshowNewRole,
  editDepartmentRole,
  editDept,
  setEditDept,
}) {
  const [createDepartmentForm, setcreateDepartmentForm] = useState({
    department_name: "",
    code: "",
    branch: "",
    description: "",
  });

  const [rolesDescriptionAPI, setrolesDescriptionAPI] = useState({});
  const [rolesDescription, setrolesDescription] = useState([]);

  const rolesDescriptionFromAPI = {
    rolesDescription: [
      {
        role: "Admin",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugi",
        access: {
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
          oboarding: {
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
        },
      },
      {
        role: "Manager",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugi",
        access: {
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
          oboarding: {
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
        },
      },
      {
        role: "Employee",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugit voluptate ipsa saepe liber esse alias exercitationem aliquid consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptates ipsum eius enim quia eveniet ab expedita officiis maxime accusantium, rem fugi",
        access: {
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
          oboarding: {
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
        },
      },
    ],
  };

  useEffect(() => {
    setcreateDepartmentForm(editDept);
  }, [editDept]);

  useEffect(() => {
    setrolesDescriptionAPI(rolesDescriptionFromAPI);
  }, []);
  useEffect(() => {
    if (Object.keys(rolesDescriptionAPI).length > 0) {
      setrolesDescription(rolesDescriptionAPI.rolesDescription);
    }
  }, [rolesDescriptionAPI]);

  const handleCreateDepartmentChange = (e) => {
    setcreateDepartmentForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  function handleNewDepartmentSubmit(e) {
    e.preventDefault();
    setcreateDepartmentForm({
      department_name: "",
      code: "",
      branch: "",
      description: "",
    });
    setshowDepartmentRole(false);
  }

  return (
    <>
      <div className="create-department-role-container">
        <svg
          className="x-logo-create-department"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={(e) => {
            e.preventDefault();
            setshowDepartmentRole(false);
            setEditDept({});
          }}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
        <div className="create-department-head">
          <p>{editDepartmentRole ? "Edit" : "Create New"} Department & roles</p>
        </div>
        <div className="create-department-body">
          <form onSubmit={handleNewDepartmentSubmit}>
            <div className="create-department-content">
              <div className="create-department-box">
                <label htmlFor="department_name">
                  Department Name<sup>*</sup>
                </label>
                <input
                  id="department_name"
                  name="department_name"
                  type="text"
                  placeholder="Sales"
                  value={createDepartmentForm.department_name}
                  onChange={handleCreateDepartmentChange}
                  required
                />
              </div>
              <div className="create-department-box">
                <label htmlFor="code">
                  Code<sup>*</sup>
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  placeholder="Enter Code"
                  value={createDepartmentForm.code}
                  onChange={handleCreateDepartmentChange}
                  required
                />
              </div>
            </div>
            <div className="create-department-content">
              <div
                className="create-department-box"
                id="create-department-box-fullwidth"
              >
                <label htmlFor="branch">
                  Branch<sup>*</sup>
                </label>
                <select
                  id="branch"
                  onChange={handleCreateDepartmentChange}
                  value={createDepartmentForm.branch}
                  name="branch"
                  required
                >
                  <option value="" style={{ color: "hsl(0, 0%, 80%)" }}>
                    Select Branch
                  </option>
                  <option value="Location">Location</option>
                  <option value="Location 2">Location 2</option>
                  <option value="Location 3">Location 3</option>
                </select>
              </div>
            </div>
            <div className="create-department-content">
              <div
                className="create-department-box"
                id="create-department-box-fullwidth"
              >
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Text content"
                  value={createDepartmentForm.description}
                  onChange={handleCreateDepartmentChange}
                />
              </div>
            </div>
            <div className="create-department-content">
              <div className="display-role-cointainer-title">
                <nav>
                  <p>Roles</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setshowNewRole(true);
                    }}
                  >
                    + Add New
                  </button>
                </nav>
              </div>
            </div>
            <div className="create-department-content">
              <div className="display-role-cointainer">
                <table>
                  <thead className="display-role-tablehead">
                    <tr>
                      <th id="display-rolename-width">Role Name</th>
                      <th id="display-description-width">Description</th>
                    </tr>
                  </thead>
                  <tbody className="display-role-tablebody">
                    {rolesDescription.length > 0 ? (
                      rolesDescription.map((ele, ind) => (
                        <tr key={ind}>
                          <td id="display-rolename-width">{ele.role}</td>
                          <td id="display-description-width">
                            {ele.description}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>
                          <p>No Data Found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="create-department-submit-container">
              <nav>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setshowDepartmentRole(false);
                  }}
                  className="create-department-cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="create-department-save">
                  Save
                </button>
              </nav>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
