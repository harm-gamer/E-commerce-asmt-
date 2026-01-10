import Product from "../models/Product.js";

// CREATE
export const createProduct = async (req, res) => {
    const images = req.files.map((file) => file.path);

  const product = await Product.create({
    ...req.body,
    images,
  });

  res.status(201).json(product);
};

// READ (ALL)
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// UPDATE
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
