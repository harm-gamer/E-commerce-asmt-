import { useEffect, useState } from "react";
import {
  createProduct,
  updateProduct
} from "../../services/productService";

const ProductForm = ({ editing, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: ""
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const submit = async (e) => {
    e.preventDefault();
    editing
      ? await updateProduct(editing._id, form)
      : await createProduct(form);

    setForm({ name: "", price: "", stock: "", category: "" });
    onSuccess();
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 shadow rounded grid grid-cols-4 gap-4"
    >
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="border p-2"
      />
      <button className="col-span-4 bg-black text-white py-2">
        {editing ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
