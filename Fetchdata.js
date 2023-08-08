import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { memo } from "react";
import axios from "axios";
import DetailsSection from "./FDetails";

const Mproduct = memo(() => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get("/getProduct"); // Replace with your backend API endpoint
      const data = response.data;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const watch = product.filter("female");

  const handleDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackWard = () => {
    setSelectedProduct(null);
  };

  const handleDelete = (productId) => {
    // Make a DELETE request to your backend API to delete the product from MongoDB
    // ...
  };

  const renderMiddleSection = () => {
    return (
      <div>
        <h3 className="men">MEN</h3>
        <div className="container-fluid">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {watch.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card text-center">
                    <img
                      src={product.imgURL}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">ID: {product.id}</h5>
                      <h6 className="card-text">Price: {product.Price}.</h6>
                      <a
                        href="#"
                        onClick={() => handleDelete(product.id)}
                        className="btn btn-primary  delete"
                      >
                        Delete
                      </a>
                      <a href="#" className="btn btn-primary  addtocart">
                        Add to Cart
                      </a>
                      <br />
                      <Link
                        to="/DetailsSection"
                        href="#"
                        onClick={() => handleDetails(product)}
                        className="btn btn-primary details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {selectedProduct ? (
        <DetailsSection
          product={selectedProduct}
          handleBackWard={handleBackWard}
        />
      ) : (
        renderMiddleSection()
      )}
    </>
  );
});

export default Mproduct;
