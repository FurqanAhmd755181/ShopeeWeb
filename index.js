import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routers/RegesterRoute.js";
import cors from "cors";
import router from "./Routers/ProductRoutes.js";
import { getProduct } from "./Controllers/ProductController.js";
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

app.use("/Register", userRouter);
app.use("/Admin", router);
app.get('/products?category=${category}', getProduct);


app.listen(5000, () => {
  console.log(`THe Server is Running at 5000`);
});
