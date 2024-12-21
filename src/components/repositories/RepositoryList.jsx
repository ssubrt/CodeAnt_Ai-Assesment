import { useState } from 'react';
import { FiSearch, FiRefreshCw, FiPlus } from 'react-icons/fi';
import { useRepository } from '../../contexts/RepositoryContext';
import AddRepositoryModal from './AddRepositoryModal';

export default function RepositoryList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { repositories } = useRepository();

  const filteredRepositories = repositories.filter(repo => 
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Repositories</h1>
        <div className="flex w-full sm:w-auto space-x-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <FiRefreshCw />
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 sm:flex-none bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600"
          >
            <FiPlus />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{filteredRepositories.length} total repositories</p>
      
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        {filteredRepositories.map((repo) => (
          <div key={repo.id} className="p-3 sm:p-4 bg-white rounded-lg border">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                  <h3 className="font-medium truncate">{repo.name}</h3>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded whitespace-nowrap">
                    {repo.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600">
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

      <AddRepositoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}