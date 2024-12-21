export default function LoginTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex space-x-2 mb-8">
      <button
        onClick={() => onTabChange('saas')}
        className={`flex-1 py-2 px-4 rounded-lg ${
          activeTab === 'saas' 
            ? 'bg-blue-500 text-white' 
            : 'bg-white text-gray-700'
        }`}
      >
        SAAS
      </button>
      <button
        onClick={() => onTabChange('self-hosted')}
        className={`flex-1 py-2 px-4 rounded-lg ${
          activeTab === 'self-hosted' 
            ? 'bg-blue-500 text-white' 
            : 'bg-white text-gray-700'
        }`}
      >
        Self Hosted
      </button>
    </div>
  );
}