import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { AuthContext } from "../context/AuthContext";
import CustomButton from "../../components/custom-button/custom-button";
import "./signup-component.css";

// class Component function
const Registration = () => {
  const navigate = useNavigate();
   const { register } = useContext(AuthContext);
   const [userInfo, setUserInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
   });
   const [error, setError] = useState('');
   const handleOnChangeText = (e, fieldName) => {
      setUserInfo({ ...userInfo, [fieldName]: e.target.value}); // the userInfo is initializing a spread operators
   }

   const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = userInfo;

    try {
     await register(firstName, lastName, email, password);
     console.log("Registration successful");
     navigate("/")
    }catch(error) {
       setError(error.message); // Display the error message to the user
       console.log('Registration failed. Please try again.');
    }
   }
  return (
    <>
      <div className="web-page">
        <div className="left-view"></div>
        <div className="right-view">
          <div className="facts">
            <h2 className="text-center text-red-900">Register Here...</h2>
            <form onSubmit={handleSubmit}>
              {error ? <p className="text-center text-red-900">{error}</p> : null}
              <FormInput
                name="firstName"
                type="text"
                value={userInfo.firstName}
                onChange={(e) => handleOnChangeText(e, "firstName")}
                placeholder="Enter your first name"
                required
              />
              <FormInput
                name="lastName"
                type="text"
                value={userInfo.lastName}
                onChange={(e) => handleOnChangeText(e, "lastName")}
                placeholder="Enter your last name"
                required
              />
              <FormInput
                name="email"
                type="email"
                value={userInfo.email}
                onChange={(e) => handleOnChangeText(e, "email")}
                placeholder="Enter your email"
                required
              />
              <FormInput
                name="password"
                type="password"
                value={userInfo.password}
                onChange={(e) => handleOnChangeText(e, "password")}
                placeholder="Enter your password"
                required
              />
              <div>
                <input type="checkbox" />
                <span>I accept to terms and condition applied</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <CustomButton type="submit">Signup</CustomButton>
              </div>
            </form>
            <h2 className="text-center">Already have an account?</h2>
            <span className="text-center">
              Click the link below to sign-in
              <Link
                to="/"
                style={{
                  textDecoration: "underline",
                  fontSize: "17px",
                  color: "red",
                  marginLeft: "10px",
                }}
              >
                Sign-in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
