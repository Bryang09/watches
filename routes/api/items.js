const express = require("express");

const router = express.Router();

// Item Model
const Item = require("../../models/Item");

router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).end();
      }
      return res.status(200).json(item);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    sex: req.body.sex,
    price1: req.body.price1,
    price2: req.body.price2,
    color: req.body.color,
    brand: req.body.brand,
    src: req.body.src,
    src2: req.body.src2
  });

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

module.exports = router;
