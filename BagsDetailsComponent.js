import React, { useContext } from "react";
import { BagsContext } from "./Bags";

const BagsDetailsComponent = ({ handleBackWard }) => {
  // console.log(BagsContext);
  const { product = {} } = useContext(BagsContext);

  return (
    <div>
      <h3 className="men">Product Details</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center">
              <img
                src={product.imgURL}
                className="card-img-top img-fluid Femail-product"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Price: Rs. {product.price}</h5>
              </div>
              <button className="btn btn-primary" onClick={handleBackWard}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagsDetailsComponent;
