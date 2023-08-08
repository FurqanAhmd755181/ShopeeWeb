import React from "react";
import { useState } from "react";
import DetailsSection from "./FDetails";
// import { Link } from 'react-router-dom';

const Mwatches= () => {
  const [product, setProduct] = useState([
    {
        
      Brand :'SVESTON BOLT',
      id: ' SV-6283-F',
      Price: 3500,
      imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/DSC08778.jpg?v=1677321195&width=1080",  
      
    },
    {
        Brand :'SVESTON WYNDOW',
        id: "SV-6290-F",
        Price: 2500,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/IMG_9819.jpg?v=1673357932&width=1080", 
        
      },
      {
        Brand :'SVESTON SPECTRUM ',
        id: "SV-8217-M",
        Price: 2999,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/IMG-20230414-WA0096.jpg?v=1685356197&width=1080",
        
      },
      {
        Brand : 'SVESTON WOATI',
        id: "SV-9299",
        Price: 5999,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/DSC02513.jpg?v=1685343324&width=1080",
        
      },
      {
        Brand :'SVESTON POVTY',
        id: "SV-18055 ",
        Price: 8999,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/BoomstonChain_1.jpg?v=1683808296&width=1080",
        
      },
      {
        Brand : 'SVESTON SILAS',
        id: "SV-18028 ",
        Price: 1200,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/7465-02.jpg?v=1682598742&width=1080",
        
      },
      {
        Brand : 'SVESTON XOLANI ' ,
        id: "SV-18017",
        Price: 8900,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/11284-01_1800x1800.jpg?v=1682690063",
        
      },
      {
        Brand : 'SVESTON AXRE' ,
        id: "SV-18052 ",
        Price: 19999,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/WhatsAppImage2022-12-31at4.51.23PM_1.jpg?v=1672638283&width=1080",
        
      },
      {
        Brand : 'SVESTON SQUIRREL',
        id: "SV-6274-F",
        Price: 4500,
        imgURL: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/9219-M-4_1800x1800.png?v=1681903493",
        
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
      <h3 className="men">MEN's WATCHES</h3>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-4 ">
            {product.map((product) => (
              <div className="col" key={product.id}>
                <div className="card text-center">
                  <img
                  
                    src={product.imgURL}
                    className="card-img-top img-fluid Watches-Images "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {product.id}</h5>
                    <h6 className="card-text">{product.Price}.</h6>
                    
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


export default Mwatches;