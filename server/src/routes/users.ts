import { Router } from "express";
import { prisma } from "../prisma";
import { requireAuth, requireRole } from "../middleware/auth";

const r = Router();

r.get("/search", requireAuth, async (req, res) => {
  const q = String(req.query.q || "").trim();
  if (!q) return res.json([]);
  const users = await prisma.user.findMany({
    where: { OR: [ { email: { contains: q, mode: "insensitive" } }, { name: { contains: q, mode: "insensitive" } } ] },
    select: { id: true, name: true, email: true, role: true },
    take: 10,
  });
  res.json(users);
});

r.get("/me", requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

// Admin: list all users
r.get("/all", requireRole("admin"), async (req, res) => {
  const users = await prisma.user.findMany({ select: { id:true, email:true, name:true, role:true, createdAt:true } });
  res.json(users);
});

// Admin: approve tutor profile
r.post("/tutor/:userId/approve", requireRole("admin"), async (req, res) => {
  const { userId } = req.params;
  const profile = await prisma.tutorProfile.update({ where: { userId }, data: { approved: true } });
  res.json(profile);
});

export default r;
