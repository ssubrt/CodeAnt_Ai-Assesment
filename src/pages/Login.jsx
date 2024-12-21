import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { SiBitbucket, SiAzuredevops, SiGitlab } from 'react-icons/si';
import { useAuth } from '../contexts/AuthContext';
import LoginHeader from '../components/auth/LoginHeader';
import LoginTabs from '../components/auth/LoginTabs';
import LoginButton from '../components/auth/LoginButton';
import StatsCard from '../components/auth/StatsCard';

export default function Login() {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (provider) => {
    // Simulate login - in real app, this would authenticate with the provider
    login({
      name: 'John Doe',
      email: 'john@example.com',
      provider
    });
    navigate('/');
  };

  const providers = activeTab === 'saas' 
    ? [
        { icon: FiGithub, name: 'Github' },
        { icon: SiBitbucket, name: 'Bitbucket' },
        { icon: SiAzuredevops, name: 'Azure Devops' },
        { icon: SiGitlab, name: 'GitLab' }
      ]
    : [
        { icon: SiGitlab, name: 'Self Hosted GitLab' },
        { icon: FiGithub, name: 'SSO' }
      ];

  return (
    <div className="min-h-screen bg-gray-50 md:grid md:grid-cols-2">
      <div className="p-8 flex items-center">
        <StatsCard />
      </div>
      
      <div className="p-8 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <LoginHeader />
          <LoginTabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="space-y-4">
            {providers.map((provider) => (
              <LoginButton
                key={provider.name}
                icon={provider.icon}
                provider={provider.name}
                onClick={() => handleLogin(provider.name)}
              />
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="text-black font-medium">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}