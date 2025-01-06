"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; // Using next/navigation for App Router
import Link from "next/link"; // Importing Link for client-side navigation

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the form is filled
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Perform actual login logic (e.g., API call to authenticate)
    login();  // Mock login function

    // Redirect to the dashboard after successful login
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
        
        <p>Don&apos;t have an account?{" "} .</p>


          <Link href="/signup" className="text-blue-500">Sign Up</Link> {/* Using Link for navigation */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
