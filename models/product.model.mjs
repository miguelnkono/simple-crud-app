import mongoose from "mongoose";

// creating a schema for the products
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestames: true }, // this is to allow future updates to the schema
);

// creating a model for the products
const product = mongoose.model("Product", productSchema);

export default product;
