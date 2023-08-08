import React from "react";
import { useState } from "react";
import FemailProductDetails from "./FDetails";
// import { Link } from 'react-router-dom';
import { memo } from "react";
import { useNavigate } from 'react-router-dom';

const Fproduct = memo( () => { 
  const navigate = useNavigate();
  
  const [product, setProduct] = useState([
    {
      id: "GS8402",
      Price: 8599,
      imgURL: "https://mocciani.com.pk/cdn/shop/files/1_2603667d-cc19-4156-b20d-d68d46caed31_1080x.jpg?v=1684919393",  
      material: "cotton",
    },
    {
        id: "FUM567",
        Price: 9999,
        imgURL: "https://mocciani.com.pk/cdn/shop/files/1_1b47862e-9097-4618-bba7-cfad62a9aa0e_1080x.jpg?v=1684919328", 
        material: "cotton",
      },
      {
        id: "KMN089",
        Price: 5600,
        imgURL: "https://mocciani.com.pk/cdn/shop/files/1_0bc0a7d2-b0fe-4915-a686-2ebf176d13b6_1080x.jpg?v=1684569375",
        material: "cotton",
      },
      {
        id: "MPB980",
        Price: 10000,
        imgURL: "https://mocciani.com.pk/cdn/shop/files/1_a296874e-16af-4338-bfe5-434dbae42786_1080x.jpg?v=1684919213",
        material: "cotton",
      },
      {
        id: "ABC234",
        Price: 9000,
        imgURL: "https://mocciani.com.pk/cdn/shop/products/M71MC0582BLACK_1080x.jpg?v=1679479084",
        material: "cotton",
      },
      {
        id: "QRO789",
        Price: 6000,
        imgURL: "https://mocciani.com.pk/cdn/shop/products/M71MC0582BEIGE_1080x.jpg?v=1679479044",
        material: "cotton",
      },

      {
        id: "QAZ900",
        Price: 5999,
        imgURL: "https://mocciani.com.pk/cdn/shop/products/MW1610_1080x.jpg?v=1679479147",
        material: "cotton",
      },

      {
        id: "CXZ8999",
        Price: 11999,
        imgURL: "https://mocciani.com.pk/cdn/shop/files/1_f43530b3-c9db-4dfa-87e9-c4984379054e_1080x.jpg?v=1682754597",
        material: "cotton",
      },

      {
        id: "OPK89",
        Price: 12999,
        imgURL: "https://mocciani.com.pk/cdn/shop/products/2_6fd3914f-7b54-4eab-ab34-54cb10b2df2d_1080x.jpg?v=1680685884",
        material: "cotton",
      },
    
  ]);

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleDetails = (setProduct) => {
    setSelectedProduct(setProduct);
    navigate("/Components/FDetails");
  };
  
  

  const handleBackWard = () => {
    setSelectedProduct(null);
  };

  // const handleDelete = (productId) => {
  //   setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));
  // };

  const renderMiddleSection = () => {
    return (
      <div>
      <h3 className="men">Woman's SHOES</h3>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {product.map((product) => (
              <div className="col" key={product.id}>
                <div className="card text-center">
                 
                <img
                      src={product.imgURL}
                      onClick={() => handleDetails(product)}
                      className="card-img-top img-fluid Femail-product "
                      alt="..."
                />
                
                  
                 
                  <div className="card-body">
                    <h5 className="card-title">{product.id}</h5>
                    <h6 className="card-text">{product.Price}.</h6>
                    
                   
                    
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
      <FemailProductDetails
      product={selectedProduct}
      handleBackWard={handleBackWard}
    />
) : (
  renderMiddleSection()
)}

    </>
  );
}
);


export default Fproduct;


