import React from "react";
import { useState } from "react";
import DetailsSection from "./FDetails";
// import { Link } from 'react-router-dom';

const Mperfume = () => {
  const [product, setProduct] = useState([
    {
      Brand :'Dolce & Gabbana',
      id: "FUM567",
      Price: 2500,
      imgURL: "https://m.media-amazon.com/images/I/51aFAedDRHL._SX679_.jpg", 
      
      
      
    },
    {
      Brand :'Dolce & Gabbana',
      id: '1yx40',
      Price: 3500,
      imgURL: "https://m.media-amazon.com/images/I/41PShl5bufL._SL1081_.jpg",  
        
      },
      {
        Brand :'CHANEL',
        id: "KMN089",
        Price: 2999,
        imgURL: "https://m.media-amazon.com/images/I/5170odys2UL._SX679_.jpg",
        
      },
      {
        Brand : 'Dolce & Gabbana',
        id: "MPB980",
        Price: 5999,
        imgURL: "https://m.media-amazon.com/images/I/51Z-N-KNfPL._SL1000_.jpg",
        
      },
      {
        Brand :'Nautica',
        id: "ABC234",
        Price: 8999,
        imgURL: "https://m.media-amazon.com/images/I/61gm2yDGyyL._SX679_.jpg",
        
      },
      {
        Brand : 'Aromapassions',
        id: "QRO789",
        Price: 1200,
        imgURL: "https://m.media-amazon.com/images/I/41uae9+77sL._SX679_.jpg",
        
      },
      {
        Brand : 'Nautica' ,
        id: "QAZ900",
        Price: 8900,
        imgURL: "https://m.media-amazon.com/images/I/51X6GpwzBTL._SX679_.jpg",
        
      },
      {
        Brand : 'Dolce & Gabbana' ,
        id: "CXZ8999",
        Price: 19999,
        imgURL: "https://m.media-amazon.com/images/I/51MtNzj3fDL._SX679_.jpg",
        
      },
      {
        Brand : 'Classics',
        id: "OPK89",
        Price: 4500,
        imgURL: "https://m.media-amazon.com/images/I/81O7zBVnuLL._SL1500_.jpg",
        
      },
    
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleDetails = (product) => {
  //   setSelectedProduct(product);
  // };

  const handleBackWard = () => {
    setSelectedProduct(null);
  };

//   const handleDelete = (productId) => {
//     setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));
//   };

  const renderMiddleSection = () => {
    return (
      <div>
      <h3 className="men">MEN's PERFUME</h3>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {product.map((product) => (
              <div className="col" key={product.id}>
                <div className="card text-center">
                  <img
                    src={product.imgURL}
                    className="card-img-top img-fluid Perfume-Component"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.id}</h5>
                    <h6 className="card-text">{product.Price}</h6>
                    
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


export default Mperfume;