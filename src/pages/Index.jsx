
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600 mb-6">Start building your amazing project here!</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/dashboard" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="/about" 
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
