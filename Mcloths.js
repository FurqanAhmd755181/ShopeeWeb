import React from "react";
import { useState } from "react";
import DetailsSection from "./FDetails";
// import { Link } from 'react-router-dom';

const Mcloths = () => {
  const [product, setProduct] = useState([
    {
      id: "GS8402",
      Price: 859,
      imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_83308d14-ed8a-45b8-828e-195af044a415.jpg?v=1680013686&width=900",  
     
    },

    {
        id: "FUM567",
        Price: 9999,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_5af12c4e-7104-4940-aeb5-a62373e61622.jpg?v=1676457592&width=900", 
       
    },
    {
        id: "KMN089",
        Price: 5600,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_d1eaf921-6cdc-4b5a-bf73-9324ccea14ac.jpg?v=1680013520&width=900",
       
    },
    {
        id: "MPB980",
        Price: 10000,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_65d1959e-bdfa-4fd9-a8a1-e18eb21758c6.jpg?v=1680013539&width=900",
       
    },
    {
        id: "ABC234",
        Price: 9000,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_562e0ba6-0977-435b-8bdb-3dac9b53e6f1.jpg?v=1680013397&width=900",
       
    },
    {
        id: "QRO789",
        Price: 6000,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_8ffbf462-bd08-41ed-9005-e16e8aae2994.jpg?v=1676457602&width=900",
       
    },
    {
        id: "QAZ900",
        Price: 5999,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_b36244fb-3609-4430-9f5b-f86e4ba47bca.jpg?v=1677051140&width=900",
       
    },
    {
        id: "CXZ8999",
        Price: 11999,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_3a14201d-ba6d-454b-af46-2df68b861974.jpg?v=1680013644&width=900",
       
    },
    {
        id: "OPK89",
        Price: 12999,
        imgURL: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_524f5603-1b73-4427-96c5-3cf56bb1fb31.jpg?v=1676457644&width=900",
       
    },
    
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackWard = () => {
    setSelectedProduct(null);
  };

  //   const handleDelete = (productId) => {
  //     setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));
  //   };

  const renderMiddleSection = () => {
    return (
      <div>
      <h3 className="men">MEN's CLOTHES</h3>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {product.map((product) => (
              <div className="col" key={product.id}>
                <div className="card text-center">
                  <img
                    src={product.imgURL}
                    className="card-img-top img-fluid Mail-Cloths "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">ID: {product.id}</h5>
                    <h6 className="card-text">Price: {product.Price}.</h6>
                    
                    {/* <a
                      href="..."
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-primary  delete"
                    >
                      Delete
                    </a>
                    <a href="..." className="btn btn-primary  addtocart">
                      Add to Cart
                    </a>
                    <br /> */}

                    {/* <Link
                      to="/DetailsSection"
                      href="#"
                      onClick={() => handleDetails(product)}
                      className="btn btn-primary details"
                    >
                      Details
                    </Link> */}
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
};


export default Mcloths;
