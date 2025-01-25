"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <div>
        <input
          style={{
            padding: "10px",
            margin: "15px",
          }}
          value={roomId}
          type="text"
          placeholder="Room Id"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        />
        <button
          style={{
            padding: "10px",
            margin: "15px",
          }}
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
