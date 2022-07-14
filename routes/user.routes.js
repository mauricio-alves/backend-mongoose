const router = require("express").Router();
const UserModel = require("../models/User.model");

// CREATE
router.post("/create-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    return res.status(201).json({ message: "Success!", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// READ ALL
router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await UserModel.find().populate("fruits");
    return res.status(200).json({ message: "Success!", allUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// READ DETAILS
router.get("/details/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findOne({ _id: userId }).populate("fruits");
    return res.status(200).json({ message: "Success!", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// UPDATE
router.patch("/edit/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    ).populate("fruits");
    return res.status(200).json({ message: "Success!", editedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// DELETE
router.delete("/delete/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await UserModel.deleteOne({ _id: userId });
    return res.status(200).json({ message: "Success!", deletedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

module.exports = router;
