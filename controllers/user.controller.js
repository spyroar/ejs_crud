import { User } from "../models/user.model.js";

User;

const userController = (req, res) => {
  res.render("index");
};

// Create User for  register

export const createUserController = async (req, res) => {
  const { name, email, city, phone_Number } = req.body;
  const userData = await User.create({
    name,
    email,
    city,
    phone_Number,
  });
  if (!userData ||userData) {
    console.log("data saved successfully",userData);
  } else {
       console.log("user data not saved");
       
  }

  res.render("index");
};

export { userController };
