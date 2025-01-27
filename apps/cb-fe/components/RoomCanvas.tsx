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
        Connecting to Server...
      </div>
    );
  }
  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
}
