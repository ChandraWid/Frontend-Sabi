import React, { useState } from 'react';
import { Eye, EyeOff, Mail } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#138880] flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-8 md:top-40 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center">
          <img 
            src="/logo192.png" 
            alt="React Logo" 
            className="h-8 w-8 mr-2 md:h-10 md:w-10"
          />
          <h1 className="text-white text-2xl md:text-3xl font-bold">Sabi - Admin</h1>
        </div>
      </div>

      {/* Login Form Container */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-20 md:mt-24">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="username" 
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#138880]"
                  required
                />
                <Mail 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  size={20}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#138880]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
                type="submit"
                className="w-full bg-[#0A4541] text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
                >
                Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;