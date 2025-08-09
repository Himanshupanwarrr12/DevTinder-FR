import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaVenusMars,
  FaCode,
  FaInfoCircle,
  FaImage,
} from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        baseUrl + "/signUp",
        {
          firstName,
          emailId,
          password,
          gender,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        {" "}
        <div className="bg-gradient-to-r from-indigo-900/80 to-gray-900 p-8 text-center border-b border-gray-800">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            DevMatch
          </h1>
          <p className="text-gray-400 mt-2">Create your developer profile</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-5">
            <label className=" text-gray-400 text-sm font-medium mb-2 flex items-center">
              <FaUser className="mr-2" />
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                placeholder="Enter your first name"
                required
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mb-5">
            <label className=" text-gray-400 text-sm font-medium mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                placeholder="Enter your email"
                required
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mb-5">
            <label className=" text-gray-400 text-sm font-medium mb-2 flex items-center">
              <FaLock className="mr-2" />
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                placeholder="Create a password"
                required
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mb-5">
            <label className=" text-gray-400 text-sm font-medium mb-2 flex items-center">
              <FaVenusMars className="mr-2" />
              Gender
            </label>
            <div className="flex gap-3">
              {["male", "female", "other"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    gender === option
                      ? "bg-indigo-700 border border-indigo-500"
                      : "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={() => setGender(option)}
                    className="sr-only"
                  />
                  <span className="text-gray-300 capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-800 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:shadow-indigo-900/30"
          >
            SignUp
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-400 font-medium hover:text-indigo-300 transition"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
