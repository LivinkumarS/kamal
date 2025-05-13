import React, { useState } from "react";
import "./addNewCandidate.css";
import { useNavigate, useParams } from "react-router-dom";

export default function addNewCandidate() {
  const BackToOnboarding = useNavigate();
  const [file, setfile] = useState([]);

  const { candidateId } = useParams();
  console.log(candidateId);

  const [formData, setFormData] = useState({
    basics: "",
    hra: "",
    employee_code: "",
    first_name: "",
    last_name: "",
    department: "",
    designation: "",
    gender: "",
    joining_date: "",
    personal_number: "",
    emergency_contact_number: "",
    email: "",
    aadhar_number: "",
    pan_number: "",
    status: "",
    current_address: "",
    highest_qualification: "",
    previous_employer: "",
    total_experience_year: "",
    total_experience_month: "",
    relevant_experience_year: "",
    relevant_experience_month: "",
    marital_status: "",
    conveyance_allowance: "",
    medical_allowance: "",
    other_allowances: "",
    bonus: "",
    taxes: "",
    pf: "",
    esi: "",
    gross_salary: "",
    net_salary: "",
    uan_number: "",
    pf_number: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    asset: "",
    asset_type: "",
    laptop_company_name: "",
    asset_id: "",
    upload_documents: "",
  });
  console.log(file);

  const putComma = (val) => {
    let value = val.replace(/[^0-9.]/g, "");
    value = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(
      value
    );
    return value;
  };

  const handleFormChange = (e) => {
    if (
      e.target.id === "basics" ||
      e.target.id === "hra" ||
      e.target.id === "conveyance_allowance" ||
      e.target.id === "medical_allowance" ||
      e.target.id === "other_allowances" ||
      e.target.id === "bonus" ||
      e.target.id === "gross_salary" ||
      e.target.id === "net_salary" ||
      e.target.id === "taxes" ||
      e.target.id === "pf" ||
      e.target.id === "esi"
    ) {
      return setFormData((prev) => {
        return { ...prev, [e.target.id]: putComma(e.target.value) };
      });
    }

    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setfile((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setfile((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  function handleSubmit() {
    //befor enpty it to be uploadet to backend link
    e.preventDefault();
    setFormData({
      basics: "",
      hra: "",
      employee_code: "",
      first_name: "",
      last_name: "",
      department: "",
      designation: "",
      gender: "",
      joining_date: "",
      personal_number: "",
      emergency_contact_number: "",
      email: "",
      aadhar_number: "",
      pan_number: "",
      status: "",
      current_address: "",
      highest_qualification: "",
      previous_employer: "",
      total_experience_year: "",
      total_experience_month: "",
      relevant_experience_year: "",
      relevant_experience_month: "",
      marital_status: "",
      conveyance_allowance: "",
      medical_allowance: "",
      other_allowances: "",
      bonus: "",
      taxes: "",
      pf: "",
      esi: "",
      gross_salary: "",
      net_salary: "",
      uan_number: "",
      pf_number: "",
      bank_name: "",
      account_number: "",
      ifsc_code: "",
      asset: "",
      asset_type: "",
      laptop_company_name: "",
      asset_id: "",
      upload_documents: "",
    });
    setfile([]);
  }
  return (
    <div className="Add-New-Candidate">
      <div className="addcandidate-head">
        {candidateId ? <h1>Edit Candidate</h1> : <h1>Add Candidate</h1>}
        <nav>
          <svg
            onClick={() => BackToOnboarding(-1)}
            className="x-mark-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </nav>
      </div>
      <form onSubmit={handleSubmit} className="add-candidate-form">
        <div className="general-container">
          <h2>General Details</h2>
          <nav className="general">
            <div className="general-left">
              <div className="candidate-box">
                <label htmlFor="employee_code">Employee Code</label>
                <input
                  type="text"
                  id="employee_code"
                  className="candidate-input"
                  name="employee_code"
                  value={formData.employee_code}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="candidate-input"
                  value={formData.first_name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="candidate-input"
                  value={formData.last_name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleFormChange}
                  className="candidate-input"
                >
                  <option value="">Select Department</option>
                  <option value="Sales">Sales</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Admin">Admin</option>
                  <option value="Technicians">Technicians</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div className="candidate-box">
                <label htmlFor="designation">Designation</label>
                <select
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleFormChange}
                  className="candidate-input"
                >
                  <option value="">Select Designation</option>
                  <option value="Manager">Manager</option>
                  <option value="Senior Executive">Senior Executive</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
              <div className="candidate-box">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleFormChange}
                  className="candidate-input"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="candidate-box">
                <label htmlFor="joining_date">Joining Date</label>
                <input
                  type="date"
                  id="joining_date"
                  className="candidate-input"
                  name="joining_date"
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="general-right">
              <div className="candidate-box">
                <label htmlFor="personal_number">Personal Number </label>
                <input
                  type="number"
                  id="personal_number"
                  className="candidate-input increment-decrement"
                  name="personal_number"
                  onChange={handleFormChange}
                  value={formData.personal_number}
                  required
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="emergency_contact_number">
                  Emergency Contact Number
                </label>
                <input
                  type="number"
                  id="emergency_contact_number"
                  className="candidate-input increment-decrement"
                  name="emergency_contact_number"
                  onChange={handleFormChange}
                  value={formData.emergency_contact_number}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="email">Personal Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  name="PersonalEmail"
                  className="candidate-input"
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="aadhar_number">Aadhar Number</label>
                <input
                  type="number"
                  id="aadhar_number"
                  className="candidate-input increment-decrement"
                  name="aadhar_number"
                  value={formData.aadhar_number}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="pan_number">PAN Number</label>
                <input
                  type="text"
                  id="pan_number"
                  className="candidate-input"
                  name="pan_number"
                  onChange={handleFormChange}
                  value={formData.pan_number}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={handleFormChange}
                  className="candidate-input"
                  name="status"
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="candidate-box" id="text-at-start">
                <label htmlFor="current_address">Current Address</label>
                <textarea
                  name="current_address"
                  type="text"
                  id="current_address"
                  className="candidate-input"
                  onChange={handleFormChange}
                  value={formData.current_address}
                  required
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="general-container">
          <h2>EDUCATION & EXPERIENCE</h2>
          <nav className="general">
            <div className="general-left">
              <div className="candidate-box">
                <label htmlFor="highest_qualification">
                  Highest Qualification{" "}
                </label>
                <input
                  type="text"
                  id="highest_qualification"
                  className="candidate-input"
                  name="highest_qualification"
                  value={formData.highest_qualification}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="previous_employer">Previous Employer</label>
                <input
                  type="text"
                  id="previous_employer"
                  name="previous_employer"
                  className="candidate-input"
                  value={formData.previous_employer}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="total_experience_year">Total Experience</label>
                <div className="experience-dropdowns">
                  <select
                    id="total_experience_year"
                    name="total_experience_year"
                    className="candidate-input"
                    value={formData.total_experience_year}
                    onChange={handleFormChange}
                  >
                    <option value="">Years</option>
                    {[...Array(51)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "Year" : "Years"}
                      </option>
                    ))}
                  </select>

                  <select
                    id="total_experience_month"
                    name="total_experience_month"
                    className="candidate-input"
                    value={formData.total_experience_month}
                    onChange={handleFormChange}
                  >
                    <option value="">Months</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "Month" : "Months"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="general-right">
              <div className="candidate-box">
                <label htmlFor="relevant_experience_year">
                  Relevant Experience{" "}
                </label>
                <div className="experience-dropdowns">
                  <select
                    id="relevant_experience_year"
                    name="relevant_experience_year"
                    className="candidate-input"
                    value={formData.relevant_experience_year}
                    onChange={handleFormChange}
                  >
                    <option value="">Years</option>
                    {[...Array(51)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "Year" : "Years"}
                      </option>
                    ))}
                  </select>

                  <select
                    id="relevant_experience_month"
                    name="relevant_experience_month"
                    value={formData.relevant_experience_month}
                    onChange={handleFormChange}
                    className="candidate-input"
                  >
                    <option value="">Months</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "Month" : "Months"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="candidate-box">
                <label htmlFor="marital_status">Marital Status</label>
                <select
                  id="marital_status"
                  className="candidate-input"
                  name="marital_status"
                  onChange={handleFormChange}
                  value={formData.marital_status}
                >
                  <option value="">Select Status</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
        <div className="general-container">
          <h2>SALARY DETAILS</h2>
          <nav className="general">
            <div className="general-left">
              <div className="candidate-box">
                <label htmlFor="basics">Basics</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="basics"
                    className="salary-input"
                    name="basics"
                    value={formData.basics}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="hra">HRA</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="hra"
                    className="salary-input"
                    name="hra"
                    value={formData.hra}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="conveyance_allowance">
                  Conveyance Allowance
                </label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="conveyance_allowance"
                    className="salary-input"
                    name="conveyance_allowance"
                    value={formData.conveyance_allowance}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="medical_allowance">Medical Allowance</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="medical_allowance"
                    className="salary-input"
                    name="medical_allowance"
                    value={formData.medical_allowance}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="other_allowances">Other Allowances</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="other_allowances"
                    className="salary-input"
                    name="other_allowances"
                    value={formData.other_allowances}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="bonus">Bonus</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="bonus"
                    className="salary-input"
                    name="bonus"
                    onChange={handleFormChange}
                    value={formData.bonus}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="taxes">Taxes</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="taxes"
                    className="salary-input"
                    name="taxes"
                    onChange={handleFormChange}
                    value={formData.taxes}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="pf">PF</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="pf"
                    className="salary-input"
                    name="pf"
                    onChange={handleFormChange}
                    value={formData.pf}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="general-right">
              <div className="candidate-box">
                <label htmlFor="esi">ESI</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="esi"
                    className="salary-input"
                    name="esi"
                    onChange={handleFormChange}
                    value={formData.esi}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="gross_salary">Gross Salary</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="gross_salary"
                    className="salary-input"
                    name="gross_salary"
                    value={formData.gross_salary}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="net_salary">Net Salary</label>
                <div className="salary-container">
                  <input
                    type="text"
                    id="net_salary"
                    className="salary-input"
                    name="net_salary"
                    value={formData.net_salary}
                    onChange={handleFormChange}
                  />
                  <span className="rupee-symbol">
                    <svg
                      className="rupees-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="candidate-box">
                <label htmlFor="uan_number">UAN Number </label>
                <input
                  type="number"
                  id="uan_number"
                  className="candidate-input increment-decrement"
                  name="uan_number"
                  value={formData.uan_number}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="pf_number">PF Number </label>
                <input
                  type="number"
                  id="pf_number"
                  className="candidate-input increment-decrement"
                  name="pf_number"
                  value={formData.pf_number}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="bank_name">Bank Name</label>
                <input
                  type="text"
                  id="bank_name"
                  className="candidate-input"
                  name="bank_name"
                  value={formData.bank_name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="account_number">Account Number</label>
                <input
                  type="number"
                  id="account_number"
                  className="candidate-input increment-decrement"
                  name="account_number"
                  value={formData.account_number}
                  onChange={handleFormChange}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="ifsc_code">IFSC Code</label>
                <input
                  type="text"
                  id="ifsc_code"
                  className="candidate-input"
                  name="ifsc_code"
                  value={formData.ifsc_code}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="general-container">
          <h2>Other Detailes</h2>
          <nav className="general">
            <div className="general-left">
              <div className="candidate-box">
                <label htmlFor="asset">Asset</label>
                <select
                  id="asset"
                  name="asset"
                  value={formData.asset}
                  onChange={handleFormChange}
                  className="candidate-input"
                >
                  <option value="">Select Assets</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                </select>
              </div>
              <div className="candidate-box">
                <label htmlFor="asset_type">Asset Type</label>
                <select
                  id="asset_type"
                  name="asset_type"
                  className="candidate-input"
                  value={formData.asset_type}
                  onChange={handleFormChange}
                >
                  <option value="">Select Type</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>
              <div className="candidate-box">
                <label htmlFor="laptop_company_name">Laptop Company Name</label>
                <select
                  id="laptop_company_name"
                  name="laptop_company_name"
                  className="candidate-input"
                  onChange={handleFormChange}
                  value={formData.laptop_company_name}
                >
                  <option value="">Laptop Name</option>
                  <option value="Dell">Dell</option>
                  <option value="HP">HP</option>
                  <option value="Lenove">Lenovo</option>
                </select>
              </div>
            </div>

            <div className="general-right">
              <div className="candidate-box">
                <label htmlFor="asset_id">Asset Id</label>
                <input
                  type="text"
                  id="asset_id"
                  className="candidate-input"
                  name="asset_id"
                  onChange={handleFormChange}
                  value={formData.asset_id}
                />
              </div>
              <div className="candidate-box">
                <label htmlFor="upload_documents">Upload Documents</label>
                <input
                  type="file"
                  id="upload_documents"
                  className="uploadfile candidate-input"
                  name="upload_documents"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              {file.length > 0 && (
                <div className="file-list">
                  {file.map((file, index) => (
                    <div key={index} className="file-item">
                      <span>{file.name}</span>
                      <button
                        className="undo"
                        onClick={(e) => {
                          e.preventDefault();
                          removeFile(index);
                        }}
                      >
                        Undo
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="candidate-submit-container">
          <button type="submit" className="candidate-submit-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
