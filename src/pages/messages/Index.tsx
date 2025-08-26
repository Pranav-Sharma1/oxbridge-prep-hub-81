import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Conversation = { id: string; peer: { id: string; name: string; email: string } };

export default function Messages() {
  const [convos, setConvos] = useState<Conversation[]>([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Array<{ id: string; name: string; email: string }>>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/conversations", { credentials: "include" });
      if (res.ok) setConvos(await res.json());
    })();
  }, []);

  const createConversation = async (peerId: string) => {
    const res = await fetch("/api/conversations", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ peerId }),
    });
    if (res.ok) {
      const conv = await res.json();
      window.location.href = `/messages/${conv.id}`;
    }
  };

  const doSearch = async () => {
    if (!search.trim()) return setResults([]);
    const res = await fetch(`/api/users/search?q=${encodeURIComponent(search.trim())}`, { credentials: "include" });
    if (res.ok) setResults(await res.json());
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>

      <div className="mb-6">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search students/tutors by name or email" className="border p-2 rounded w-full" />
        <div className="flex gap-2 mt-2">
          <button className="border px-3 py-1" onClick={doSearch}>Search</button>
        </div>
        <ul className="mt-3 space-y-2">
          {results.map(r => (
            <li key={r.id} className="flex items-center justify-between border rounded p-2">
              <div><div className="font-medium">{r.name || r.email}</div><div className="text-sm text-muted-foreground">{r.email}</div></div>
              <button className="underline" onClick={() => createConversation(r.id)}>Message</button>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-lg font-medium mb-2">Your conversations</h2>
      <ul className="space-y-2">
        {convos.map(c => (
          <li key={c.id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{c.peer.name || c.peer.email}</div>
              <div className="text-sm text-muted-foreground">{c.peer.email}</div>
            </div>
            <Link className="underline" to={`/messages/${c.id}`}>Open</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
