import RegisterAppModel from "../Models/RegesterSchema.js";


export const postRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Create a new instance of the RegesterAppModel
  console.log("I am Here");
  const newRegister = new RegisterAppModel({
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    password: password,
  });

  try {
    // Save the new Regester Applicant  data to the database

    await newRegister.save();

    res.status(200).json(newRegister);
  } catch (error) {
    console.error("Error saving login data:", error);
    res.status(500).json({ message: "Unable to save login data" });
  }
};

export const getRegister = async (req, res) => {

  try {
    const registrations = await RegisterAppModel.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching registration data' });
  }  

};

export const DeleteRegistration = async (req, res) => {
  const { id } = req.params;
 
  try {
    const registration = await RegisterAppModel.findById(id);
    
    if (registration) {
      await RegisterAppModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Registration deleted successfully.' });
    } else {
      console.log(`Registration with ID ${id} does not exist in the database.`);
      res.status(404).json({ error: `Registration with ID ${id} does not exist in the database.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the registration'});
  }
};

export const UpdateRegistration = async (req, res) => {
  const { id } = req.params;
  const {firstName, lastName,email,password} = req.body;
    console.log(firstName,lastName,email,password);
  try {
    const userUpdate = await RegisterAppModel.findByIdAndUpdate(
      id,
      { firstName, lastName, email , password},
      { new: true });
    console.log(userUpdate)

    if (!userUpdate) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(userUpdate); // Send the updated user data as the response
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the registration' });
  }
};


