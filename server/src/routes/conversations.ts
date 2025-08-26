import { Router } from "express";
import { prisma } from "../prisma";
import { requireAuth } from "../middleware/auth";

const r = Router();

r.get("/", requireAuth, async (req, res) => {
  const me = req.user!;
  const convos = await prisma.conversation.findMany({
    where: { OR: [ { aId: me.id }, { bId: me.id } ] },
    include: { a: true, b: true },
    orderBy: { updatedAt: "desc" },
  });
  const mapped = convos.map(c => ({
    id: c.id,
    peer: c.aId === me.id ? { id: c.b.id, name: c.b.name, email: c.b.email } : { id: c.a.id, name: c.a.name, email: c.a.email }
  }));
  res.json(mapped);
});

r.post("/", requireAuth, async (req, res) => {
  const me = req.user!;
  const { peerId } = req.body as { peerId: string };
  if (!peerId || peerId === me.id) return res.status(400).json({ error: "Invalid peer" });
  const [aId, bId] = me.id < peerId ? [me.id, peerId] : [peerId, me.id];
  const conv = await prisma.conversation.upsert({
    where: { aId_bId: { aId, bId } },
    update: {},
    create: { aId, bId },
  });
  res.json(conv);
});

export default r;
