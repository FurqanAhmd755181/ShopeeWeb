import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UpdateReg = () =>{

const [updatedFirstName, setUpdatedFirstName] = useState("");
const [updatedLastName, setUpdatedLastName] = useState("");
const [updatedEmail, setUpdatedEmail] = useState("");
const [updatedPassword, setUpdatedPassword] = useState("");
const [id, setId] = useState('');

// console.log(id,updatedFirstName, updatedLastName,updatedEmail,updatedPassword);

const handleUpdateForm = async (e) => {
    e.preventDefault();

  
    try {
      const { data } = await axios.put(`http://localhost:5000/registrationUpdate/${id}`, {
        firstName: updatedFirstName,
        lastName: updatedLastName,
        email: updatedEmail,
        password: updatedPassword,
      });
      console.log(data);
  
      //Handle the response or perform any necessary actions after update

      console.log("Registration updated successfully");

    } 
    catch (error) {
      console.log("An error occurred while updating the registration:", error);
    }
  
    // Reset the update form fields
    setUpdatedFirstName("");
    setUpdatedLastName("");
    setUpdatedEmail("");
    setUpdatedPassword("");
    setId("")
  };
  



    return(

 <Form onSubmit={handleUpdateForm}>
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
  <Form.Group controlId="updatedFirstName">
    <Form.Label>Updated First Name</Form.Label>
    <Form.Control
      type="text"
      value={updatedFirstName}
      onChange={(e) => setUpdatedFirstName(e.target.value)}
      required
    />
  </Form.Group>

  <Form.Group controlId="updatedLastName">
    <Form.Label>Updated Last Name</Form.Label>
    <Form.Control
      type="text"
      value={updatedLastName}
      onChange={(e) => setUpdatedLastName(e.target.value)}
      required
    />
  </Form.Group>

  <Form.Group controlId="updatedEmail">
    <Form.Label>Updated Email</Form.Label>
    <Form.Control
      type="email"
      value={updatedEmail}
      onChange={(e) => setUpdatedEmail(e.target.value)}
      required
    />
  </Form.Group>

  <Form.Group controlId="updatedPassword">
    <Form.Label>Updated Password</Form.Label>
    <Form.Control
      type="password"
      value={updatedPassword}
      onChange={(e) => setUpdatedPassword(e.target.value)}
      required
    />
  </Form.Group>

  <Button variant="primary" type="submit" >
    Update
  </Button>
</Form>


)


}

export default UpdateReg;