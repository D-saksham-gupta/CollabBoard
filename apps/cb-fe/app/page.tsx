"use client";
import React, { useState, useEffect } from "react";
import {
  Pencil,
  Share2,
  Layers,
  Palette,
  Github,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import React from "react";
// import { Pencil, Share2, Layers, Palette, Github } from "lucide-react";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 z-0" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
//               Sketch Your Ideas to Life
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//               A beautiful and intuitive whiteboard that helps you collaborate in
//               real-time. Draw, sketch, and visualize your ideas with our
//               powerful drawing tools.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
//                 Start Drawing
//               </button>
//               <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors border border-gray-700">
//                 Try Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-gray-900 py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <FeatureCard
//               icon={<Pencil className="w-6 h-6 text-blue-400" />}
//               title="Intuitive Drawing"
//               description="Smooth, responsive drawing tools that feel natural and precise"
//             />
//             <FeatureCard
//               icon={<Share2 className="w-6 h-6 text-purple-400" />}
//               title="Real-time Collaboration"
//               description="Work together with your team in real-time, anywhere"
//             />
//             <FeatureCard
//               icon={<Layers className="w-6 h-6 text-green-400" />}
//               title="Infinite Canvas"
//               description="Never run out of space with our infinite canvas"
//             />
//             <FeatureCard
//               icon={<Palette className="w-6 h-6 text-pink-400" />}
//               title="Rich Styling"
//               description="Customize colors, sizes, and styles to match your needs"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400">
//               © 2024 Excalidraw Clone. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-6">
//               <a
//                 href="https://github.com"
//                 className="text-gray-400 hover:text-gray-300 transition-colors"
//               >
//                 <Github className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function FeatureCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-400">{description}</p>
//     </div>
//   );
// }

// export default App;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* <button
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button> */}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 dark:from-purple-900/30 dark:to-blue-900/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mb-6">
              Sketch Your Ideas to Life
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              A beautiful and intuitive whiteboard that helps you collaborate in
              real-time. Draw, sketch, and visualize your ideas with our
              powerful drawing tools.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    router.push("/room");
                  } else {
                    router.push("/signin");
                  }
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    router.push("/room");
                  } else {
                    router.push("/signup");
                  }
                }}
                className="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors border border-gray-300 dark:border-gray-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={
                <Pencil className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              }
              title="Intuitive Drawing"
              description="Smooth, responsive drawing tools that feel natural and precise"
            />
            <FeatureCard
              icon={
                <Share2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              }
              title="Real-time Collaboration"
              description="Work together with your team in real-time, anywhere"
            />
            <FeatureCard
              icon={
                <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
              }
              title="Infinite Canvas"
              description="Never run out of space with our infinite canvas"
            />
            <FeatureCard
              icon={
                <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              }
              title="Rich Styling"
              description="Customize colors, sizes, and styles to match your needs"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 CollabBoard. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/D-saksham-gupta/CollabBoard"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default App;
