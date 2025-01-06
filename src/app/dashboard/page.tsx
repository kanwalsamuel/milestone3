// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";

// const DashboardPage = () => {
//   const { isLoggedIn, logout } = useAuth(); // Accessing login state and logout method from AuthContext
//   const router = useRouter();

//   // If the user is not logged in, redirect them to the login page
//   if (!isLoggedIn) {
//     router.push("/login");
//     return null; // Prevent rendering of the page until redirection
//   }

//   return (
//     <div className="max-w-lg mx-auto my-8 p-6 border rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h2>
//       <p className="text-lg">You are logged in! Here you can view your account information, manage your preferences, etc.</p>

//       {/* Add additional dashboard content here */}
//       <div className="mt-6">
//         <p className="text-xl">Dashboard Content Goes Here</p>
//       </div>

//       {/* Logout Button */}
//       <button
//         onClick={() => {
//           logout(); // Calling logout function from context to log out the user
//           router.push("/login"); // Redirecting to login page after logout
//         }}
//         className="w-full mt-6 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default DashboardPage;



"use client"; // Ensure this is executed client-side only

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const { isLoggedIn, logout } = useAuth(); // Accessing login state and logout method from AuthContext
  const router = useRouter();

  useEffect(() => {
    // If the user is not logged in, redirect them to the login page
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]); // Dependency array ensures this runs only when isLoggedIn changes

  // Prevent rendering of the page until redirection logic completes
  if (!isLoggedIn) {
    return null; // You can display a loading state here if desired
  }

  return (
    <div className="max-w-lg mx-auto my-8 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h2>
      <p className="text-lg">You are logged in! Here you can view your account information, manage your preferences, etc.</p>

      {/* Add additional dashboard content here */}
      <div className="mt-6">
        <p className="text-xl">Dashboard Content Goes Here</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          logout(); // Calling logout function from context to log out the user
          router.push("/login"); // Redirecting to login page after logout
        }}
        className="w-full mt-6 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
