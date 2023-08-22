import express from "express";
import { getProduct, postProduct,DeleteProduct,ProductUpdation } from "../Controllers/ProductController.js";
// import ProductStructModel from "../Models/ProductSchema.js";

const router = express.Router();

// Routes for product.....
router.get("/Admin-Product", getProduct);
router.post("/Admin-Product", postProduct);
router.delete("/Admin-Product", DeleteProduct);
router.put("/Admin-Product" , ProductUpdation);

export default router;




