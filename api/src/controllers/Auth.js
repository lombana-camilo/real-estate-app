import { db } from "./../db.js";
const { User } = db.models;

export const signup = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);
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
