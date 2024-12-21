import { FiSearch, FiRefreshCw, FiPlus } from 'react-icons/fi';

export default function RepositoryList() {
  const repositories = [
    { name: 'design-system', type: 'React', size: '7320 KB', status: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', type: 'Javascript', size: '5871 KB', status: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', type: 'Python', size: '4521 KB', status: 'Private', updated: '5 days ago' },
    // Add more repositories as needed
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Repositories</h1>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <FiRefreshCw />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <FiPlus />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4">33 total repositories</p>
      
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        {repositories.map((repo, index) => (
          <div key={index} className="p-4 bg-white rounded-lg border">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium">{repo.name}</h3>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {repo.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>{repo.type}</span>
                  </span>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}