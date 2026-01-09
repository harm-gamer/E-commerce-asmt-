import { useState } from "react";
import api from "../../services/api";

const ProductForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  const [images, setImages] = useState([]);

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value)
    );

    for (let img of images) {
      formData.append("images", img);
    }

    await api.post("/products", formData);
    onSuccess();
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 shadow rounded space-y-3"
    >
      <input
        placeholder="Product Name"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Price"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <input
        type="file"
        multiple
        onChange={(e) => setImages(e.target.files)}
      />

      <button className="bg-black text-white px-4 py-2">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
