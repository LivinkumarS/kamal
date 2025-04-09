import React, { useState, useEffect } from "react";
import "./createUser.css";

export default function createUser({ showCreateUser, setshowCreateUser }) {
  const [createUserForm, setcreateUserForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    branch: "",
    department: "",
    roles: "",
    reporting_to: "",
    available_branches: "",
    employee_id: "",
  });

  const handleCreateUserChange = (e) => {
    setcreateUserForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  console.log(createUserForm);

  function handleCreateUserSubmit(e) {
    e.preventDefault();
    setcreateUserForm({
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      branch: "",
      department: "",
      roles: "",
      reporting_to: "",
      available_branches: "",
      tms_user_id: "",
    });
    setshowCreateUser(false);
  }

  return (
    <div className="createuser-container">
      <svg
        className="x-logo-createuser"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        onClick={() => setshowCreateUser(false)}
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
      <div className="createuser-head">
        <p>Create New Branch Users</p>
      </div>
      <div className="createuser-body">
        <form onSubmit={handleCreateUserSubmit}>
          <div className="createuser-content">
            <div className="createuser-box">
              <label htmlFor="first_name">
                First Name<sup>*</sup>
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Kamal"
                value={createUserForm.first_name}
                onChange={handleCreateUserChange}
                required
              />
            </div>
            <div className="createuser-box">
              <label htmlFor="last_name">
                Last Name<sup>*</sup>
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Raj"
                value={createUserForm.last_name}
                onChange={handleCreateUserChange}
                required
              />
            </div>
          </div>
          <div className="createuser-content">
            <div className="createuser-box">
              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="stackly@gmail.com"
                value={createUserForm.email}
                onChange={handleCreateUserChange}
                required
              />
            </div>
            <div className="createuser-box">
              <label htmlFor="contact_number">Contact Number</label>
              <input
                id="contact_number"
                name="contact_number"
                className="increment-decrement-createuser"
                type="number"
                placeholder="9134554123"
                value={createUserForm.contact_number}
                onChange={handleCreateUserChange}
              />
            </div>
          </div>
          <div className="createuser-content">
            <div className="createuser-box">
              <label htmlFor="branch">
                Branch<sup>*</sup>
              </label>
              <input
                id="branch"
                name="branch"
                type="text"
                placeholder="Implementation Dome Logistics"
                value={createUserForm.branch}
                onChange={handleCreateUserChange}
                required
              />
            </div>
            <div className="createuser-box">
              <label htmlFor="department">
                Department<sup>*</sup>
              </label>
              <select
                id="department"
                onChange={handleCreateUserChange}
                value={createUserForm.department}
                name="department"
                required
              >
                <option value="" style={{ color: "hsl(0, 0%, 80%)" }}>
                  Select Department
                </option>
                <option value="UI">UI</option>
                <option value="Sales">Sales</option>
                <option value="Engineering">Engineering</option>
                <option value="Admin">Admin</option>
                <option value="Technicians">Technicians</option>
                <option value="HR">HR</option>
              </select>
            </div>
          </div>
          <div className="createuser-content">
            <div className="createuser-box">
              <label htmlFor="roles">
                roles<sup>*</sup>
              </label>
              <select
                id="roles"
                value={createUserForm.roles}
                onChange={handleCreateUserChange}
                name="roles"
                required
              >
                <option value="" style={{ color: "hsl(0, 0%, 80%)" }}>
                  Select Role
                </option>
                <option value="super_admin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user_employee">User Employee</option>
              </select>
            </div>
            <div className="createuser-box">
              <label htmlFor="reporting_to">Reporting To</label>
              <input
                id="reporting_to"
                name="reporting_to"
                type="text"
                placeholder="9134554123"
                value={createUserForm.reporting_to}
                onChange={handleCreateUserChange}
              />
            </div>
          </div>
          <div className="createuser-content">
            <div className="createuser-box">
              <label htmlFor="available_branches">Available Branches</label>
              <input
                id="available_branches"
                name="available_branches"
                type="text"
                placeholder="9134554123"
                value={createUserForm.available_branches}
                onChange={handleCreateUserChange}
              />
            </div>
            <div className="createuser-box">
              <label htmlFor="employee_id">Employee ID</label>
              <input
                id="employee_id"
                name="employee_id"
                type="text"
                placeholder="Enter Employee ID"
                onChange={handleCreateUserChange}
                value={createUserForm.employee_id}
              />
            </div>
          </div>
          <div className="createuser-submit-container">
            <nav>
              <button
                onClick={() => setshowCreateUser(false)}
                className="createuser-cancel"
              >
                Cancel
              </button>
              <button type="submit" className="createuser-save">
                Save
              </button>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
}
