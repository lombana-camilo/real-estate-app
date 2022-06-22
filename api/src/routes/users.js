import { Router } from "express";
import { db } from "./../db.js";

const { User } = db.models;
const router = Router();

router.post("/signup", async(req, res) => {
  const userData = req.body;
  const alreadyUser = await User.findOne({
    where: { email: userData.email },
  });
  if (alreadyUser) {
    res.status(404).send("Email already in use");
  } else {
    User.create(userData);
    res.send(userData);
  }
});

router.post("/login", async (req, res) => {
  const { email,password } = req.body;
  const user = await User.findOne({ where: { email,password } });
   // console.log(email,user)
  if (user) {
      res.json(user)
  } else res.status(404).send("User not found");
});

export default router;
