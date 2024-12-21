import { FiHome, FiCode, FiCloud, FiBook, FiSettings, FiHeadphones, FiLogOut } from 'react-icons/fi';

export default function Sidebar({ onClose }) {
  const menuItems = [
    { icon: FiHome, label: 'Repositories', href: '#' },
    { icon: FiCode, label: 'AI Code Review', href: '#' },
    { icon: FiCloud, label: 'Cloud Security', href: '#' },
    { icon: FiBook, label: 'How to Use', href: '#' },
    { icon: FiSettings, label: 'Settings', href: '#' },
    { icon: FiHeadphones, label: 'Support', href: '#' },
    { icon: FiLogOut, label: 'Logout', href: '#' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <select className="w-full p-2 border rounded">
            <option>UtkarshDhairyaPanwar</option>
          </select>
        </div>
        <nav className="flex-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100"
            >
              <item.icon className="text-gray-600" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}