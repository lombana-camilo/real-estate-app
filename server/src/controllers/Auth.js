import { db } from "./../db.js";
import bcrypt from "bcrypt";
import "dotenv/config";
const { User } = db.models;

export const signup = async (req, res) => {
  const { name, email, password: realPassword } = req.body;
  //Hashing password
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(realPassword, salt);

  try {
    const newUser = await User.create({ name, email, password });
    res.json({ name: newUser.name, email: newUser.email });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const login = async (req, res) => {
  const { email, password: realPassword } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const isUser = await bcrypt.compare(realPassword, user.password);
    if (isUser) {
      res.json({ name: user.name, email: user.email });
    } else res.status(404).send("Incorrect Password");
  } else res.status(404).send("Email not found");
};
