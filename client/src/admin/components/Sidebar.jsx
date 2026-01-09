import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <h2 className="text-xl font-bold p-6">Admin Panel</h2>

      <nav className="flex flex-col gap-2 px-4">
        <Link to="/admin/dashboard" className="p-2 rounded hover:bg-gray-100">
          Dashboard
        </Link>
        <Link to="/admin/products" className="p-2 rounded hover:bg-gray-100">
          Products
        </Link>
        <Link to="/admin/orders" className="p-2 rounded hover:bg-gray-100">
          Orders
        </Link>
        <Link to="/admin/customers" className="p-2 rounded hover:bg-gray-100">
          Customers
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
