const router = require("express").Router();
const FruitModel = require("../models/Fruit.model");

router.post("/create-fruit", async (req, res) => {
  try {
    const newFruit = await FruitModel.create(req.body);
    return res.status(201).json(newFruit);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/all-fruits", async (req, res) => {
  try {
    const allFruits = await FruitModel.find();
    return res.status(200).json(allFruits);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fruit = await FruitModel.findOne({ _id: id });
    return res.status(200).json(fruit);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedFruit = await FruitModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(editedFruit);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFruit = await FruitModel.deleteOne({ _id: id });
    return res.status(200).json(deletedFruit);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
