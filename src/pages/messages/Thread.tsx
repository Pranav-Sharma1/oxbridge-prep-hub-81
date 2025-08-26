import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

type Msg = { id: string; body: string; senderId: string; createdAt: string };

let socket: Socket | null = null;

export default function Thread() {
  const { conversationId } = useParams();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  const load = async () => {
    if (!conversationId) return;
    const res = await fetch(`/api/messages?conversationId=${conversationId}`, { credentials: "include" });
    if (res.ok) setMessages(await res.json());
  };

  useEffect(() => {
    load();
    // init socket once
    if (!socket) {
      socket = io(undefined, { autoConnect: false });
    }
    if (socket && conversationId) {
      socket.connect();
      socket.emit("join", { conversationId });
      socket.on("message:new", (msg: Msg) => {
        if (msg.conversationId && msg.conversationId !== conversationId) return;
        setMessages(prev => [...prev, msg]);
      });
    }
    const i = setInterval(load, 3000);
    return () => {
      if (socket && conversationId) {
        socket.emit("leave", { conversationId });
      }
      clearInterval(i);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !conversationId) return;
    const res = await fetch(`/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ conversationId, body: text.trim() }),
    });
    if (res.ok) {
      setText("");
      // optimistic push handled by server via socket event
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Conversation</h1>
      </div>
      <div className="border rounded p-4 h-96 overflow-y-auto space-y-2">
        {messages.map(m => (
          <div key={m.id} className="text-sm"><span className="opacity-60">[{new Date(m.createdAt).toLocaleTimeString()}]</span> {m.body}</div>
        ))}
      </div>
      <form onSubmit={send} className="mt-3 flex gap-2">
        <input className="flex-1 border rounded p-2" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
        <button className="border rounded px-3">Send</button>
      </form>
    </div>
  );
}
