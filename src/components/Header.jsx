import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="CodeAnt AI" className="h-8" />
        <span className="text-xl font-semibold">CodeAnt AI</span>
      </div>
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden"
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </header>
  );
}