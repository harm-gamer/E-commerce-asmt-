import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import api from "../../services/api";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

 

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>

        <div className="grid grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
