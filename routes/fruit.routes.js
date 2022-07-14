const router = require("express").Router();
const FruitModel = require("../models/Fruit.model");
const UserModel = require("../models/User.model");

// CREATE
router.post("/create-fruit/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const newFruit = await FruitModel.create({ ...req.body, fruit: userId });
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { fruits: newFruit._id } },
      { new: true }
    );
    return res.status(201).json({ message: "Success!", newFruit, editedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error!", error });
  }
});

// READ ALL
router.get("/all-fruits/:userId", async (req, res) => {
  // SAME AS USER DETAILS ?
});

// READ DETAILS
router.get("/details/:userId", async (req, res) => {
  // SAME AS USER DETAILS ?
});

// UPDATE
router.patch("/edit/:fruitId", async (req, res) => {
  try {
    const { fruitId } = req.params;
    const editedFruit = await FruitModel.findOneAndUpdate(
      { _id: fruitId },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({ message: "Success!", editedFruit });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error!", error });
  }
});

// DELETE
router.delete("/delete/:fruitId", async (req, res) => {
  try {
    const { fruitId } = req.params;
    const deletedFruit = await FruitModel.deleteOne({ _id: fruitId });
    return res.status(200).json({ message: "Success!", deletedFruit });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error!", error });
  }
});

module.exports = router;
