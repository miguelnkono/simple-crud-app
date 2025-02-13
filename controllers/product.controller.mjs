import product from "../models/product.model.mjs";

// creating products in the database
export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const newProduct = await product.create({ name, quantity, price, image });
    res.status(201).json(newProduct);
  } catch (error) {
    log.error("Error creating product", error.stack);
    res
      .status(500)
      .json({ errorMessage: `error creating product: ${error.message}` });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(`Error getting products: ${error.message}`);
    res.status(500).json(`{Error getting all the products: ${error.message}`);
  }
};

// getting a single product from the database
export const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = req.params.name;
    const actualProduct = await product.findOne({ singleProduct });
    res.status(200).json(actualProduct);
  } catch (error) {
    console.log(`Error getting product: ${error.message}`);
    res.status(500).json(`{Error getting the product: ${error.message}`);
  }
};

// update a product in the database
export const updateProduct = async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      { name, quantity, price, image },
      { new: true },
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(`Error updating product: ${error.message}`);
    res.status(500).json(`{Error updating the product: ${error.message}`);
  }
};

// deleting a product from the database
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(`Error deleting product: ${error.message}`);
    res.status(500).json(`{Error deleting the product: ${error.message}`);
  }
};
