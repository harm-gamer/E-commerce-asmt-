import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <Link to="/" className="text-xl font-bold">
        JEWELRY
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>

        {!user && <Link to="/register">Register</Link>}

        {user && user.role === "customer" && (
          <button onClick={logout} className="text-red-600">
            Logout
          </button>
        )}
 {user ? (
  user.role === "admin" ? (
    <Link to="/admin/dashboard">Admin Panel</Link>
  ) : (
    <Link to="/profile">My Account</Link>
  )
) : (
  <Link to="/login">Login</Link>
)}
        {/* {user?.role === "admin" && (
          <Link to="/admin/dashboard" className="text-blue-600">
            Admin
          </Link>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
