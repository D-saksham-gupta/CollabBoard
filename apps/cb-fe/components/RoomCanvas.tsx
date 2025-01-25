"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";
import { Loader } from "./Loader";

export function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const ws = new WebSocket(`${WS_URL}?token=${token}`);

    ws.onopen = () => {
      setSocket(ws);
      ws.send(
        JSON.stringify({
          type: "join_room",
          roomId,
        })
      );
    };
  }, []);

  if (!socket) {
    return (
      <div className="flex justify-center items-center">
        {/* <Loader size="lg" className="items-center" />; */}
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />

      <div className="absolute bottom-0 right-0">
        <button className="bg-white text-red-300 p-3 m-4 rounded-md">
          Rect
        </button>
        <button className="bg-white text-red-300 p-3 m-4 rounded-md">
          Circle
        </button>
      </div>
    </div>
  );
}
