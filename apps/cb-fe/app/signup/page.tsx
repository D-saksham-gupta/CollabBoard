"use client";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { ArrowRight, Lock, Mail, Pencil, User, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function signup() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    // <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    //   <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md mx-4">
    //     <div className="text-center mb-8">
    //       <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
    //         Welcome!' : 'Join CollabBoard
    //       </h2>
    //       <p className="text-gray-400 mt-2">
    //         'Sign up to continue creating' : 'Start your creative journey today'
    //       </p>
    //     </div>

    //     <form className="space-y-6">
    //       <div>
    //         <label className="block text-sm font-medium text-gray-300 mb-2">
    //           Full Name
    //         </label>
    //         <div className="relative">
    //           <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    //           <input
    //             onChange={(e) => handleChange(e)}
    //             type="text"
    //             name="name"
    //             className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    //             placeholder="John Doe"
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-300 mb-2">
    //           Email Address
    //         </label>
    //         <div className="relative">
    //           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    //           <input
    //             onChange={(e) => handleChange(e)}
    //             type="text"
    //             name="username"
    //             className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    //             placeholder="you@example.com"
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-300 mb-2">
    //           Password
    //         </label>
    //         <div className="relative">
    //           <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    //           <input
    //             onChange={(e) => handleChange(e)}
    //             type="password"
    //             name="password"
    //             className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    //             placeholder="••••••••"
    //           />
    //         </div>
    //       </div>
    //       <div
    //         onClick={async (e) => {
    //           e.preventDefault();
    //           const { name, username, password } = values;
    //           await axios.post(`${BACKEND_URL}/signup`, {
    //             username,
    //             password,
    //             name,
    //           });
    //           router.push("/signin");
    //         }}
    //       >
    //         <button
    //           type="submit"
    //           className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
    //           onClick={() => {}}
    //         >
    //           Create Account
    //           <ArrowRight className="w-5 h-5" />
    //         </button>
    //       </div>
    //     </form>

    //     <div className="mt-6 text-center text-white">
    //       Already have an account?{" "}
    //       <Link href={"/signin"}>
    //         <button className="text-blue-400">Login</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side - Hero section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-neutral-950 items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        </div>
        <Pencil className="w-72 h-72 text-white z-10" />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-24">
        <div className="flex flex-col max-w-md mx-auto lg:mx-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">
            Sign up to CollabBoard
          </h1>
          <form className="space-y-6">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="username"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
              onClick={async (e) => {
                e.preventDefault();
                const { name, username, password } = values;
                await axios.post(`${BACKEND_URL}/signup`, {
                  username,
                  password,
                  name,
                });
                router.push("/signin");
              }}
            >
              Sign up
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <button className="w-full border border-neutral-800 text-white font-semibold py-3 px-4 rounded-lg hover:bg-neutral-900 transition-colors">
              Forgot password?
            </button>
            <p className="text-neutral-400">
              Don't have an account?{" "}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <p className="text-neutral-600 text-sm">
            © 2024 ChatApp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
