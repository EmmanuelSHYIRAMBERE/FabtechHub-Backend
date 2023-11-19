import express from "express";
import bodyParser from "body-parser";
import users from "./users";
import mongoose from "mongoose";
import { User } from "./model/userModel";

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.get("/", async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;

  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    return res.status(404).json("User not found");
  }

  users[userIndex].id = req.body.id;
  users[userIndex].name = req.body.name;

  res.status(200).json({ message: "User updated", data: { users } });
});

app.post("/post", async (req, res) => {
  const user = await User.create(req.body);

  console.log(user);

  res.status(201).json({
    data: user,
    message: "User successfully created",
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json("user not found");
  }
  res.status(200).json("success");
});

mongoose
  .connect("mongodb://localhost:27017/firstApp")
  .then(() => console.log("Db connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Our app is running on port https://localhost:${PORT}`);
});
