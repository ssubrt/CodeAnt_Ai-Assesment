import Layout from '../components/layout/Layout';

export default function CloudSecurity() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Cloud Security</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">View your cloud security status and recommendations</p>
        </div>
      </div>
    </Layout>
  );
}