import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [inpValue, setInpValue] = useState({
    fname: "",
    lname: "",
    mob: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (identifier, value) => {
    setInpValue((prevVal) => ({
      ...prevVal,
      [identifier]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/signup",inpValue)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Error in submitting the data", err);
      });

      setInpValue({
        fname: "",
        lname: "",
        mob: "",
        email: "",
        password: "",
        cpassword: "",
      });

  };
  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={`First Name:`}
          value={inpValue.fname}
          onChange={(e) => handleChange("fname", e.target.value)}
          name={`fname`}
          placeholder={`First Name`}
          type={`text`}
        />
        <Input
          label={`Last Name:`}
          value={inpValue.lname}
          onChange={(e) => handleChange("lname", e.target.value)}
          name={`lname`}
          placeholder={`Last Name`}
          type={`text`}
        />
        <Input
          label={`Phone Number:`}
          value={inpValue.mob}
          onChange={(e) => handleChange("mob", e.target.value)}
          name={`mob`}
          placeholder={`Phone Number`}
          type={`number`}
        />
        <Input
          label={`E-mail:`}
          value={inpValue.email}
          onChange={(e) => handleChange("email", e.target.value)}
          name={`email`}
          placeholder={`Email`}
          type={`email`}
        />
        <Input
          label={`Password:`}
          value={inpValue.password}
          onChange={(e) => handleChange("password", e.target.value)}
          name={`password`}
          placeholder={`Password`}
          type={`password`}
        />
        <Input
          label={`Confirm Password:`}
          value={inpValue.cpassword}
          onChange={(e) => handleChange("cpassword", e.target.value)}
          name={`cpassword`}
          placeholder={`confirm Password`}
          type={`password`}
        />
        <Input type={`submit`} value={`Sign Up`} />
      </form>
      <p>
        if you have already account?<Link to={`/`}>Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
