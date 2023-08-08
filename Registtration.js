import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
// import Register from "../Services/Register";
import axios from "axios";
import UpdateReg from "../Components/UpadeReg";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState('');
  const navigate = useNavigate();

 
  

  const handleForm = async (e) => {
    e.preventDefault();
  
    try {
      await axios.delete(`http://localhost:5000/registration/${id}`);
      console.log('Registration deleted successfully');
     
    } catch (error) {
      console.log('An error occurred while deleting the registration:', error);
      
    }
  
    // Reset the form
    setId('');
  };
  

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await Register(firstName, lastName,email,password);

    try {
      const { data } = await axios.post(`http://localhost:5000/Register`, {
        firstName,
        lastName,
        email,
        password,
      });

      navigate("/loginComp");

    } catch (error) {}

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <Form
      onSubmit={handleSubmit}
      className="Form"
      style={{ width: "300px", margin: "0 auto", padding: "20px" }}
    >
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
        Register
      </Button>

      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <Link to="/loginComp">Login</Link>
      </div>

     

    </Form>

    <Form onSubmit={handleForm}>
    <Form.Group controlId="id">
      <Form.Label>ID</Form.Label>
      <Form.Control
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit">
          DELETE
      </Button>

      
      
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <Link to="/Components/UpadeReg"><Button variant="primary" type="submit">
          Update
      </Button></Link>
      </div>
      
  </Form>

  </>
  );
}

export default RegistrationForm;
