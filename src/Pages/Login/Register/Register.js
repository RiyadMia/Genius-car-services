import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {
  /*Firebace hools install */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigetLogin = () => {
    navigate("/login");
  };
  /* Register Now */

  const handlRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }

  return (
    <div className="register-form">
      <h2 className="text-center mt-4 mb-4  text-primary">Please Register</h2>
      <form onSubmit={handlRegister}>
        <input type="text" name="Name" id="" placeholder="Your Name " />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigetLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
