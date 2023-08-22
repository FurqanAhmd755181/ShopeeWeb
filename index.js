import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routers/RegesterRoute.js";
import cors from "cors";
import router from "./Routers/ProductRoutes.js";
import { getProduct } from "./Controllers/ProductController.js";
import { DeleteRegistration,UpdateRegistration } from "../Backend/Controllers/RegisterController.js";
import { DeleteProduct } from "../Backend/Controllers/ProductController.js";
import { ProductUpdation } from "../Backend/Controllers/ProductController.js";

const app = express();
app.use(cors());

app.use(function (_req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const URL =
  "mongodb+srv://Furqanahmad9933:Furqan9933@cluster0.gcfcsut.mongodb.net/Ecommerce-web?retryWrites=true&w=majority"
mongoose
  .connect(URL, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to the dataBase"));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes FOR REGISTRATION
app.use("/Register", userRouter);
app.use("registrationget",userRouter);
app.use("/registration/:id",DeleteRegistration);
app.use("/registrationUpdate/:id", UpdateRegistration);


// Routes FOR PRODUCT
app.use("/Admin", router);
app.use("/products?category=${category}", getProduct); 
app.use("/Product/:id",DeleteProduct);
app.use("/ProductUpdate/:id",ProductUpdation);

app.listen(5000, () => {
  console.log(`THe Server is Running at 5000`);
});
