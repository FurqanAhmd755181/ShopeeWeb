import React, { useState } from "react";

const FemailProductDetails = ({ product, handleBack }) => {
  console.log(product);
  console.log("Hello World......");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log("added");
  };

  return (
    <div className="container mx-auto py-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={product.imgURL} alt="product" className="img-fluid mb-4" />
        </div>
        <div className="col-md-8">
          <p className="h4">Price: {product.Price}</p>
          <p className="h4">Number: {product.material}</p>

          <div className="form-group mt-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="form-control w-25"
            />
          </div>

          <button
            className="btn btn-primary mt-4 mr-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-secondary mt-4"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FemailProductDetails;


// const DetailsSection = ({ product, handleBackWard }) => {
//   const [quantity, setQuantity] = useState(1);
  

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     setQuantity(value);
//   };

 

//   return (
//     <div className={`container mx-auto px-4 py-10`}>
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-center">
//         <div className="md:mr-10">
//           <img src={product.imgURL} alt="product" className="mb-4 w-64" />
//         </div>
//         <div className="flex flex-col">
//           <h2 className="text-2xl font-bold mb-2">{product.id}</h2>
//           <p className="text-lg">Price: {product.Price}</p>
//           <p className="text-lg">Number: {product.id}</p>
  
//           <div className="flex items-center mt-4">
//             <label htmlFor="quantity" className="mr-2">
//               Quantity:
//             </label>
//             <input
//               type="number"
//               id="quantity"
//               min="1"
//               value={quantity}
//               onChange={handleQuantityChange}
//               className="border border-gray-300 rounded py-1 px-2 text-lg w-16"
//             />
//           </div>
  
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4"
//           >
//             Add to Cart
//           </button>
  
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4"
//             onClick={handleBackWard}
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );  
// };

// export default DetailsSection;
