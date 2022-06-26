import { db } from "./../db.js";
import bcrypt from "bcrypt";
const { User } = db.models;

export const signup = async (req, res) => {
  const {name,email,password:realPassword} = req.body;
   //Hashing password
   const salt = await bcrypt.genSalt()
   const password = await bcrypt.hash(realPassword,salt)

  try {
    const newUser = await User.create({name,email,password});
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    res.json(user);
  } else res.status(404).send("User not found");
};
