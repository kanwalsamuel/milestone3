"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from 'next/link'; // Importing Link

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Using the AuthContext
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock signup process
    console.log("Signing up with email:", email);
    login(); // Mock login after signup

    router.push("/dashboard"); // Redirect to dashboard after signup
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
      {/* Redirect to Login */}
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
