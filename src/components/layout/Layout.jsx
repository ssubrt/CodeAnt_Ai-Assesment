import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useAuth } from '../../contexts/AuthContext';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        user={user}
      />
      <div className="flex">
        <div className="hidden md:block w-64">
          <Sidebar onLogout={handleLogout} />
        </div>
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <Sidebar onClose={() => setIsSidebarOpen(false)} onLogout={handleLogout} />
          </div>
        )}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}