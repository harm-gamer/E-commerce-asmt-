import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  fetchProducts,
  deleteProduct
} from "../../services/productService";
import ProductForm from "../components/ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadProducts = async () => {
    const res = await fetchProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ProductForm
        editing={editing}
        onSuccess={() => {
          setEditing(null);
          loadProducts();
        }}
      />

      <table className="w-full bg-white shadow mt-6">
        <thead>
          <tr className="border-b">
            <th className="p-3">Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b">
              <td className="p-3">{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button
                  className="text-blue-600 mr-2"
                  onClick={() => setEditing(p)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={async () => {
                    await deleteProduct(p._id);
                    loadProducts();
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Products;
