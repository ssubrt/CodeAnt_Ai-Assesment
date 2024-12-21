import Layout from '../components/layout/Layout';

export default function Settings() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value="user@example.com"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value="UtkarshDhairyaPanwar"
                    readOnly
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-2">Notifications</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Desktop notifications</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}