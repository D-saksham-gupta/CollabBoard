"use client";
import { ArrowRight, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function room() {
  const [room, setRoom] = useState<Number | null>(0);
  const router = useRouter();

  const handleJoinRoom = () => {
    // Handle room joining logic here
    router.push(`/canvas/${room}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-8">
          <Pencil className="w-12 h-12 text-purple-500" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Join CollabBoard
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Collaborate in real-time with your team
        </p>

        {/* Join Form */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="roomName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Room Number
              </label>
              <input
                type="number"
                id="roomName"
                name="room"
                onChange={(e) => {
                  e.target.value;
                  let num = Number(e.target.value);
                  setRoom(num);
                }}
                placeholder="Enter room number..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <button
              onClick={handleJoinRoom}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium 
                       py-3 px-4 rounded-lg flex items-center justify-center space-x-2 
                       transition-colors duration-200 focus:outline-none focus:ring-2 
                       focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span>Join Room</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-center text-sm mt-8">
          Start collaborating instantly with your team
        </p>
      </div>
    </div>
  );
}
