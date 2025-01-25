import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkOWMzMWUwNC0wN2JkLTQ2NDMtODAwNy1hOTBkZTVlYjhhY2MiLCJpYXQiOjE3Mzc1MjkxMTN9.78mkMdG7-0MvP4JZ9E8-F4IpcvtvvXll9L4H8QLy9-g`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
