const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  price1: {
    type: Number,
    required: true
  },
  price2: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  src2: {
    type: String
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
