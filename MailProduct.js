// import React from "react";
// import { useState } from "react";
// import DetailsSection from "./FDetails";
// import { Link } from 'react-router-dom';
// import { memo } from "react";

// const Mproduct = memo(() => {
//   const [product, setProduct] = useState([
//     {
//       id: "GS8402",
//       Price: 859,
//       imgURL: "https://mocciani.com.pk/cdn/shop/files/1_a9fecfb1-3a09-4c39-9087-72f7dc0d8450_1080x.jpg?v=1685177871",  
     
//     },

//     {
//         id: "FUM567",
//         Price: 9999,
//         imgURL: "https://mocciani.com.pk/cdn/shop/files/1_034d5b01-bc9a-4c80-a848-66eee0f00f59_1080x.jpg?v=1684389763", 
       
//     },
//     {
//         id: "KMN089",
//         Price: 5600,
//         imgURL: "https://mocciani.com.pk/cdn/shop/files/1_a19a252a-da33-41c1-a9e9-47c7e0c3d26d_1080x.jpg?v=1684482747",
       
//     },
//     {
//         id: "MPB980",
//         Price: 10000,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_d2e5af7f-ddf4-4a72-8b1c-beac4866ad99_1080x.jpg?v=1680236931",
       
//     },
//     {
//         id: "ABC234",
//         Price: 9000,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_111191c1-4383-4705-b273-5d7b1a2781f6_1080x.jpg?v=1680237519",
       
//     },
//     {
//         id: "QRO789",
//         Price: 6000,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_8fa93cd5-5a10-44dd-89de-4431dcf096fc_1080x.jpg?v=1680236292",
       
//     },
//     {
//         id: "QAZ900",
//         Price: 5999,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_fed5dc53-412d-4238-b886-97007135fa94_1080x.jpg?v=1680237340",
       
//     },
//     {
//         id: "CXZ8999",
//         Price: 11999,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_d6ae06ae-4407-451d-b8d6-2b654875a194_1080x.jpg?v=1677588895",
       
//     },
//     {
//         id: "OPK89",
//         Price: 12999,
//         imgURL: "https://mocciani.com.pk/cdn/shop/products/1_20abdc3e-7bf0-4a6b-9e29-60e15ad26a63_1080x.jpg?v=1677588886",
       
//     },
    
//   ]);

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleDetails = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleBackWard = () => {
//     setSelectedProduct(null);
//   };

//   const handleDelete = (productId) => {
//     setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));
//   };

//   const renderMiddleSection = () => {
//     return (
//       <div>
//       <h3 className="men">MEN</h3>
//       <div className="container-fluid">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {product.map((product) => (
//               <div className="col" key={product.id}>
//                 <div className="card text-center">
//                   <img
//                     src={product.imgURL}
//                     className="card-img-top img-fluid"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">ID: {product.id}</h5>
//                     <h6 className="card-text">Price: {product.Price}.</h6>
                    
//                     <a
//                       href="..."
//                       onClick={() => handleDelete(product.id)}
//                       className="btn btn-primary  delete"
//                     >
//                       Delete
//                     </a>
//                     <a href="..." className="btn btn-primary  addtocart">
//                       Add to Cart
//                     </a>
//                     <br /> 

//                      <Link
//                       to="/DetailsSection"
//                       href="#"
//                       onClick={() => handleDetails(product)}
//                       className="btn btn-primary details"
//                     >
//                       Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
    
//     );
//   };

//   return (
//     <>
//       {selectedProduct ? (
//         <DetailsSection
//           product={selectedProduct}
//           handleBackWard={handleBackWard}
//         />
//       ) : (
//         renderMiddleSection()
//       )}
//     </>
//   );
// });


// export default Mproduct;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { memo } from "react";
import axios from "axios";

const Mproduct = memo(() => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const category = "Male"
    try {
      const response = await axios.get(`http://localhost:5000/products?category=${category}`);
      const data = response.data;
      // Handle the retrieved products in your frontend code
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

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
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {product.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card text-center">
                    <img
                      src={product.imgURL}
                      className="card-img-top img-fluid Mail"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">ID: {product.id}</h5>
                      <h6 className="card-text">Price: {product.Price}.</h6>
                      <a
                        href="..."
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

//   return (
//     <>
//       {/* {selectedProduct ? (
//         <DetailsSection
//           product={selectedProduct}
//           handleBackWard={handleBackWard}
//         />
//       ) : (
//         renderMiddleSection()
//       )}
//     </>
//   ); */}
 });

export default Mproduct;


