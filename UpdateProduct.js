import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UpdateProduct = () =>{

const [updatedPrice, setUpdatedPrice] = useState("");
const [updatedCategory, setUpdatedCategory] = useState("");
const [updatedImg, setUpdatedImg] = useState("");
const [id, setId] = useState('');

// console.log(id,updatedFirstName, updatedLastName,updatedEmail,updatedPassword);

const handleUpdateForm = async (e) => {
    e.preventDefault();

  
    try {
      const { data } = await axios.put(`http://localhost:5000/ProductUpdate/${id}`, {
        price : updatedPrice,
        category : updatedCategory,
        imgurl: updatedImg,
      });
      console.log(data);
  
      

      console.log("Registration updated successfully");

    } 
    catch (error) {
      console.log("An error occurred while updating the registration:", error);
    }
  
    // Reset the update form fields
    setUpdatedPrice("");
    setUpdatedCategory("");
    setUpdatedImg("");
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
  <Form.Group controlId="updatedPrice">
    <Form.Label>Updated Price</Form.Label>
    <Form.Control
      type="text"
      id="price"
      value={updatedPrice}
      onChange={(e) => setUpdatedPrice(e.target.value)}
      required
    />
  </Form.Group>

  <Form.Group controlId="updatedCategory">
    <Form.Label>Updated Category</Form.Label>
    <Form.Control
      type="text"
      id="category"
      value={updatedCategory}
      onChange={(e) => setUpdatedCategory(e.target.value)}
      required
    />
  </Form.Group>

  <Form.Group controlId="updatedEmail">
    <Form.Label>Updated Img</Form.Label>
    <Form.Control
      type="text"
      id="imgUrl"
      value={updatedImg}
      onChange={(e) => setUpdatedImg(e.target.value)}
      required
    />
  </Form.Group>

  <Button variant="primary" type="submit" >
    Update
  </Button>
</Form>


)
}

export default UpdateProduct;