import { createContext, useContext, useState } from 'react';

const RepositoryContext = createContext(null);

export function RepositoryProvider({ children }) {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'design-system', type: 'React', size: '7320 KB', status: 'Public', updated: '1 day ago' },
    { id: 2, name: 'codeant-ci-app', type: 'Javascript', size: '5871 KB', status: 'Private', updated: '2 days ago' },
    { id: 3, name: 'analytics-dashboard', type: 'Python', size: '4521 KB', status: 'Private', updated: '5 days ago' },
  ]);

  const addRepository = (repository) => {
    setRepositories([...repositories, { 
      id: repositories.length + 1,
      ...repository,
      updated: 'just now'
    }]);
  };

  return (
    <RepositoryContext.Provider value={{ repositories, addRepository }}>
      {children}
    </RepositoryContext.Provider>
  );
}

export const useRepository = () => useContext(RepositoryContext);