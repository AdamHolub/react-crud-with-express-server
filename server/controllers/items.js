const Item = require("../models/items");

exports.getAllItems = async (req, res) => {
  try {
    const result = await Item.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Items found!",
        payload: result,
      });
    }
    res.status(404).send({
      msg: "No items found!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getItemById = async (req, res) => {
  try {
    const result = await Item.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Item found!",
        payload: result,
      });
    }
    res.status(404).send({
      msg: "Item not found!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createItem = async (req, res) => {
  try {
    const data = new Item({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      createdAt: new Date(),
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Item created!",
        payload: result,
      });
    }
    res.status(400).send({
      msg: "Item was not created!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateItem = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      createdAt: new Date(),
    };
    const result = await Item.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Item updated!",
        payload: result,
      });
    }
    res.status(404).send({
      msg: "Item not found!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Item deleted!",
      });
    }
    res.status(404).send({
      msg: "Item not found!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
