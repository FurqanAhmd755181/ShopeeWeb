import React, { useState, createContext } from "react";
import BagsDetailsComponent from "./BagsDetailsComponent";
import { useNavigate } from 'react-router-dom';

export const BagsContext = createContext();


const Bags = () => {
  const navigate = useNavigate();
  const [product, setProducts] = useState([
    {
      category: 'Bags',
      price: 859,
      imgURL: "https://mocciani.com.pk/cdn/shop/files/1_349e6a27-3848-4ae9-8ada-664a89faed91_1080x.jpg?v=1683887510",  
    },
    {
      cateory:'Bags',
       Price: 9999,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_3f42b870-bdbf-4b23-90e4-2afcfc826aaf_1080x.jpg?v=1683780499", 
      
     },
     {
      cateory :'Bags',
       Price: 5600,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_ec2e0f43-9f3b-4446-9e8b-6041b7a0d122_1080x.jpg?v=1683894568",
      
     },
     {
       cateory :'Bags',
       Price: 10000,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_e8a4544f-5ff6-4eeb-ad50-8edc10989b7a_1080x.jpg?v=1683630880",
      
     },
     {
       cateory :'Bags',
       Price: 9000,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_f66bdcba-4bb2-414a-95a1-f21bfaa710bc_1080x.jpg?v=1683631074",
      
     },
     {
       cateory :'Bags',
       Price: 6000,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_5cfb3620-3f6d-497b-a232-b6bdaed36df2_1080x.jpg?v=1683364810",
      
     },
     {
       cateory :'Bags',
       Price: 5999,
       imgURL: "https://mocciani.com.pk/cdn/shop/products/1_ab59a22e-d799-40f8-b541-e1a752a56d4e_1080x.jpg?v=1681121129",
      
     },
     {
       cateory :'Bags',
       Price: 11999,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_7741f4f0-2f8b-470c-9c12-b298dcba4dd3_1080x.jpg?v=1683364872",
      
     },
     {
       cateory :'Bags',
       Price: 12999,
       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_1b04518c-d3d1-437e-b3d6-f45f643d2e46_1080x.jpg?v=1683364743",
      
     },

]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetails = (product) => {
    setSelectedProduct(product);
    navigate("/Components/BagsDetailsComponent");
  };

  const handleBackWard = () => {
    setSelectedProduct(null);
  };

  const renderProducts = () => {
    return (
      <div>
        <h3 className="men">Woman Bags</h3>
        <div className="container-fluid">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-5 g-2">
              {product.map((product) => (
                <div className="col" >
                  <div className="card text-center">
                    <img
                      src={product.imgURL}
                      onClick={() => handleDetails(product)}
                      className="card-img-top img-fluid Femail-product"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-text">Rs.{product.Price}</h6>
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
    <BagsContext.Provider value={{ product, handleDetails, selectedProduct }}>
      {selectedProduct ? (
         <BagsDetailsComponent handleBackWard={handleBackWard} />
      ) : (
        renderProducts()
      )}
    </BagsContext.Provider>
    
  );
};

export default Bags;