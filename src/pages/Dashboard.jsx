import { useAuthStore } from '../store/authStore';
import { useAutoLogout } from '../hooks/useAutoLogout';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuthStore();
  useAutoLogout(); // Auto-logout after 30 minutes
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Video Platform Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">{user.email}</span>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-600">
            This is a placeholder dashboard for your video content creation platform. You can manage your generated videos, publish to social media, and view analytics here.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;