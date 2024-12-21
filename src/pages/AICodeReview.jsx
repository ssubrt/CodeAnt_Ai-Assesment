import Layout from '../components/layout/Layout';

export default function AICodeReview() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">AI Code Review</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Select a repository to start AI code review</p>
        </div>
      </div>
    </Layout>
  );
}