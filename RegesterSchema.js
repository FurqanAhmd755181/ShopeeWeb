import mongoose from "mongoose";

const RegisterStructure = new mongoose.Schema({
    
  FirstName :{
    type:String
  },

  LastName:{
    type : String
  }
  ,

  Email: {
    type: String,
  },

  password: {
    type: String,
  },
});

const RegisterAppModel = mongoose.model("RegisterAppModel", RegisterStructure);

export default RegisterAppModel;
