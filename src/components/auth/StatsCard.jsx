export default function StatsCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 w-full">
      <div className="flex justify-between mb-6">
        <img src="https://i.tracxn.com/logo/company/Screenshot_from_2023-12-08_10-00-22_a9c390ec-4fb4-40a5-a3f2-f8762811028e.png?" alt="CodeAnt AI" className="h-8" />
        <span className="text-md font-extrabold">AI to Detect & Autofix Bad Code</span>
      </div>
      
      <div className="flex justify-between mb-8">
        <div className="text-center">
          <div className="text-xl font-bold">30+</div>
          <div className="text-sm text-gray-600">Language Support</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">10K+</div>
          <div className="text-sm text-gray-600">Developers</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">100K+</div>
          <div className="text-sm text-gray-600">Hours Saved</div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-600">Issues Fixed</div>
          <div className="text-sm text-green-600">↑ 14%</div>
        </div>
        <div className="text-2xl font-bold">500K+</div>
        <div className="text-xs text-gray-500">This week</div>
      </div>
    </div>
  );
}