export default function LoginButton({ icon: Icon, provider, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 mb-3"
    >
      <Icon className="h-5 w-5" />
      <span>Sign in with {provider}</span>
    </button>
  );
}