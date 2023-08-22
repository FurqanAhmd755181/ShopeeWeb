import express from "express";
import { postRegister , getRegister } from "../Controllers/RegisterController.js";
import RegisterAppModel from "../Models/RegesterSchema.js";


const userRouter = express.Router();

//Routes for Regestration....
userRouter.get("/", getRegister);
userRouter.post("/", postRegister);

//Login Proccessing 
userRouter.post("/UserLogin", async (req, res) => {
  console.log("Here");
  const { email, password } = req.body;
  if (email && password) {
    const user = await RegisterAppModel.findOne({ Email: email });
    if (user) {
      if (user.password == password) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: "Invalid Email or Password" });
      }
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } else {
    res.status(404).send({ message: "Required All Fields" });
  }
});

export default userRouter;
