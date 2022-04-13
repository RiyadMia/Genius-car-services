import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  /* From Login Sestem useRef */
  const emailRef = useRef("");

  const PasswordRef = useRef("");

  /*Firebace hooks install */

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate(from, { replace: true });
  }

  /* From Submit Button */

  const handlSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigetRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container mx-auto w-50">
      <h2 className="text-primary text-center mt-5 mb-3">Please Login</h2>

      <Form onSubmit={handlSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={PasswordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to Genius Car?
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigetRegister}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
