import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded"
      />
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </header>
  );
};

export default Topbar;
