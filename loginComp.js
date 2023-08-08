import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginComp() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   console.log('Email:', email);
  // }, [email]);

  // useEffect(() => {
  //   console.log('Password:', password);
  // }, [password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/Register/UserLogin",
        { email, password }
      );
      console.log("suucess");
      toast.success("SuccessFully login");
      // localStorage.setItem('UserInfo',JSON.stringify(data))
      navigate("/Components/Home");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Invalid Email or Password");
      } else {
        toast.error(error.message);
      }
    }
    // Reset  form
    setEmail("");
    setPassword("");
  };

  return (
    <Form className="form">
      <p className="Name ml-5">LOGIN</p>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
}

export default LoginComp;
