import React, { useState } from 'react';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import UpdateProduct from '../Components/UpdateProduct';

const AdminForm = () => {
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');
   const [id, setId] = useState('');
   console.log(id);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:5000/Admin`,{
        price,
        category,
        imgUrl
      });
      // console.log(data);
    } catch (error) {}


    setPrice('');
    setCategory('');
    setImgUrl('');
  };

  const handleForm = async (e) => {
    e.preventDefault();
  
    try {
      await axios.delete(`http://localhost:5000/Product/${id}`);
      console.log('Product deleted successfully');
     
    } catch (error) {
      console.log('An error occurred while deleting the Product:', error);
      
    }
  
    // Reset the form
    setId('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          className="form-control"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imgUrl">Image URL:</label>
        <input
          type="text"
          className="form-control"
          id="imgUrl"
          value={imgUrl}
          onChange={handleImgUrlChange}
        />
      </div>

      <button type="submit" className="btn-A btn btn-primary btn-sm">Submit</button>
    </form>
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
        <Link to="/Components/UpdateProduct"><Button variant="primary" type="submit">
          Update
      </Button></Link>
      </div>
      
  </Form>
  </>
  );
};

export default AdminForm;
