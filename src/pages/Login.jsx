import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { baseUrl } from "../utils/constant";
import { addUser } from "../features/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("Himanshu12@gmail.com");
  const [password, setPassword] = useState("Himanshuwar@12");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        baseUrl + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data || "something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="bg-gradient-to-r from-indigo-900/80 to-gray-900 p-8 text-center border-b border-gray-800">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            DevMatch
          </h1>
          <p className="text-gray-400 mt-2">
            Connect with developers like you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error.error || error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-800 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:shadow-indigo-900/30"
          >
            Log In
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-400 font-medium hover:text-indigo-300 transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        <div className="bg-gray-950 p-4 text-center border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} DevMatch. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;