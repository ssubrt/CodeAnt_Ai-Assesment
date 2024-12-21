import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiCode, FiCloud, FiSettings, FiHeadphones, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { icon: FiHome, label: 'Repositories', path: '/' },
  { icon: FiCode, label: 'AI Code Review', path: '/code-review' },
  { icon: FiCloud, label: 'Cloud Security', path: '/cloud-security' },
  { icon: FiSettings, label: 'Settings', path: '/settings' },
  { icon: FiHeadphones, label: 'Support', path: '/support' }
];

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose?.();
  };

  return (
    <div className="fixed md:static inset-0 bg-white z-40">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <select className="w-full p-2 border rounded text-sm">
            <option>UtkarshDhairyaPanwar</option>
          </select>
        </div>
        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center px-4 py-3 text-sm ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <FiLogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}