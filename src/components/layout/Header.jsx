import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

export default function Header({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="md:hidden -ml-1 mr-2 p-2 text-gray-500 hover:bg-gray-100 rounded-md"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img 
                src="https://i.tracxn.com/logo/company/Screenshot_from_2023-12-08_10-00-22_a9c390ec-4fb4-40a5-a3f2-f8762811028e.png?format=webp&height=120&width=120" 
                alt="CodeAnt AI" 
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-lg font-semibold hidden sm:block">CodeAnt AI</span>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <span className="text-sm text-gray-700 truncate max-w-[150px]">{user.name}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}