import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '', // Will hold either 'admin' or 'vendor'
    adminId: '',
    vendorId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.role === 'admin' && !formData.adminId.startsWith('B')) {
      alert('Admin ID must start with B.');
      return;
    }

    if (formData.role === 'vendor' && formData.vendorId.length === 0) {
      alert('Please provide Vendor ID.');
      return;
    }

    // Perform user registration logic here with formData
    console.log('User registration data:', formData);
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center"> Sign up</h3>

          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First name"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="role">Select Role</label>
            <select
              className="form-control"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          {formData.role === 'admin' && (
            <div className="mb-2">
              <label htmlFor="adminId">Admin ID </label>
              <input
                type="text"
                placeholder="Enter Admin ID"
                className="form-control"
                name="adminId"
                value={formData.adminId}
                onChange={handleChange}
              />
            </div>
          )}

          {formData.role === 'vendor' && (
            <div className="mb-2">
              <label htmlFor="vendorId">Vendor ID</label>
              <input
                type="text"
                placeholder="Enter Vendor ID"
                className="form-control"
                name="vendorId"
                value={formData.vendorId}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign up</button>
          </div>
          <p className="text-end mt-2">
            Already registered? <Link to="/" className="ms-2">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
