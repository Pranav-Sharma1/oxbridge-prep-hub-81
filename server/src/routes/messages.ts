import { Router } from "express";
import { prisma } from "../prisma";
import { requireAuth } from "../middleware/auth";
import { getIO } from "../socket";

const r = Router();

r.get("/", requireAuth, async (req, res) => {
  const { conversationId } = req.query as { conversationId?: string };
  if (!conversationId) return res.status(400).json({ error: "conversationId required" });
  const conv = await prisma.conversation.findUnique({ where: { id: conversationId } });
  if (!conv) return res.status(404).json({ error: "Not found" });
  if (conv.aId !== req.user!.id && conv.bId !== req.user!.id) return res.status(403).json({ error: "Forbidden" });
  const msgs = await prisma.message.findMany({ where: { conversationId }, orderBy: { createdAt: "asc" } });
  res.json(msgs);
});

r.post("/", requireAuth, async (req, res) => {
  const { conversationId, body } = req.body as { conversationId: string; body: string };
  if (!conversationId || !body) return res.status(400).json({ error: "Missing fields" });
  const conv = await prisma.conversation.findUnique({ where: { id: conversationId } });
  if (!conv) return res.status(404).json({ error: "Not found" });

  if (conv.aId !== req.user!.id && conv.bId !== req.user!.id) return res.status(403).json({ error: "Forbidden" });

  const msg = await prisma.message.create({ data: { conversationId, body, senderId: req.user!.id } });
  await prisma.conversation.update({ where: { id: conversationId }, data: { updatedAt: new Date() } });

  // Emit to socket room for that conversation
  const io = getIO();
  io.to(conversationId).emit("message:new", { id: msg.id, body: msg.body, senderId: msg.senderId, createdAt: msg.createdAt, conversationId });

  res.json(msg);
});

export default r;
