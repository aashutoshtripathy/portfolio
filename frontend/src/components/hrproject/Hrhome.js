import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";

const Hrhome = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    empnumber: "",
    email: "",
    role: "",
    password: "",
    status: "",
  });

  const [edit, setEdit] = useState({
    name: false,
    empnumber: false,
    email: false,
    password: false,
  })

  const navigate = useNavigate();

  const submitDisabled = () => {
    const requiredFields = ["name", "empnumber", "email", "status"];
    const hasEmptyFields = requiredFields.some((field) => inpVal[field] === "");
    if (inpVal.role === "Admin") {
      return Object.values(inpVal).some((value) => value === "");
    }
    return hasEmptyFields;
  };

  const handleChange = (identifier, value) => {
    setInpVal((prevVal) => ({
      ...prevVal,
      [identifier]: value,
    }));
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }))
  };

  const handleBlur = (identifier) => {
    setEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }))
  }

  const nameInvalid = edit.name && inpVal.name === '';
  const empnumberInvalid = edit.empnumber && inpVal.empnumber === '';
  const emailInvalid = edit.email && inpVal.email === '';
  const passwordInvalid = edit.password && inpVal.password === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpVal);

    axios
      .post("http://localhost:5051/api/post", inpVal)
      .then((response) => {
        console.log(response.data);
        navigate("/hrview");
      })
      .catch((error) => {
        console.error("Error in inserting the data", error);
      });

    setInpVal({
      name: "",
      empnumber: "",
      email: "",
      role: "",
      password: "",
      status: "",
    });
  };
  return (
    <div>
      <h1>ADD User</h1>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={inpVal.name}
              onBlur={() => handleBlur('name')}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <div>{nameInvalid && <p>Please enter a name.</p>}</div>
          </label>
          <label htmlFor="empnumber">
            Emp. Number
            <input
              type="text"
              id="empnumber"
              name="empnumber"
              onBlur={() => handleBlur('empnumber')}
              value={inpVal.empnumber}
              onChange={(e) => handleChange("empnumber", e.target.value)}
            />
            <div>{empnumberInvalid && <p>Please enter a empnumber.</p>}</div>
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              onBlur={() => handleBlur('email')}
              value={inpVal.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <div>{emailInvalid && <p>Please enter a valid email.</p>}</div>
          </label>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={inpVal.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="" hidden>
              Select Role
            </option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Jury">Jury</option>
          </select>

          {inpVal.role === "Admin" && (
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                onBlur={() => handleBlur('password')}
                value={inpVal.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <div>{nameInvalid && <p>Please enter a valid password.</p>}</div>
            </label>
          )}
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={inpVal.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="" hidden>
              Select Status
            </option>
            <option value="Unverified">Unverified</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
          <input type="submit" disabled={submitDisabled()} value={`Submit`} />
        </form>
        <Link to={`/hrview`}>Visit User List page</Link>
      </div>
    </div>
  );
};

export default Hrhome;
