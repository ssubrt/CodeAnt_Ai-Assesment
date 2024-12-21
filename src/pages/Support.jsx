import Layout from '../components/layout/Layout';
import { FiMail, FiMessageSquare, FiBook } from 'react-icons/fi';

export default function Support() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Support</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FiMessageSquare className="h-6 w-6 text-blue-500" />
              <h2 className="ml-2 text-lg font-medium">Contact Support</h2>
            </div>
            <p className="text-gray-600 mb-4">Get help from our support team</p>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FiMail className="h-6 w-6 text-blue-500" />
              <h2 className="ml-2 text-lg font-medium">Email Support</h2>
            </div>
            <p className="text-gray-600 mb-4">Send us an email</p>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send Email
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <FiBook className="h-6 w-6 text-blue-500" />
              <h2 className="ml-2 text-lg font-medium">Documentation</h2>
            </div>
            <p className="text-gray-600 mb-4">Browse our documentation and guides</p>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}