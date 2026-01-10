import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/dashboard").then((res) => setStats(res.data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card title="Users" value={stats.users} />
        <Card title="Products" value={stats.products} />
        <Card title="Orders" value={stats.orders} />
        <Card title="Revenue" value={`₹${stats.revenue}`} />
      </div>

      {/* Chart */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-2">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats.monthlySales}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Line dataKey="total" stroke="#000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white p-4 shadow rounded">
    <p className="text-gray-500">{title}</p>
    <h1 className="text-2xl font-bold">{value}</h1>
  </div>
);

export default Dashboard;
