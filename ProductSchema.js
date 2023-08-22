import mongoose from "mongoose";

const ProductStruct = mongoose.Schema({
  price: Number,
  imgurl: String,
  category: String
});

const ProductStructModel = mongoose.model('productStructModel', ProductStruct);

export default ProductStructModel;
