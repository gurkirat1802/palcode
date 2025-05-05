import { useAuthStore } from '../store/authStore';
import { useAutoLogout } from '../hooks/useAutoLogout';

function Home() {
  const { user, logout } = useAuthStore();
  useAutoLogout(); // Auto-logout after 30 minutes

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome, {user.phoneNumber}</h2>
      <button
        onClick={logout}
        className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;