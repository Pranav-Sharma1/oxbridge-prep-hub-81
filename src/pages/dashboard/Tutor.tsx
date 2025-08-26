import { useAuth } from "../../context/AuthContext";

export default function DashboardTutor() {
  const { user, logout } = useAuth();
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tutor Dashboard</h1>
        <button onClick={logout} className="border rounded px-3 py-1">Log out</button>
      </div>
      <p className="mt-2">Welcome, {user?.name}. Role: {user?.role}</p>
      <a className="underline" href="/messages">Go to Messages</a>
    </div>
  );
}
