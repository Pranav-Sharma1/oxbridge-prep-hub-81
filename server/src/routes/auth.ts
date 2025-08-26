import { Router } from "express";
import { prisma } from "../prisma";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { env } from "../env";

const r = Router();

r.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body as { name:string; email:string; password:string; role:"student"|"tutor"|"admin" };
  if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(400).json({ error: "Email already in use" });
  const passwordHash = await argon2.hash(password);
  const user = await prisma.user.create({ data: { name, email, passwordHash, role: role || "student" } });

  if (user.role === "tutor") {
    await prisma.tutorProfile.create({ data: { userId: user.id, approved: false } });
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production", maxAge: 7*24*60*60*1000 });
  res.json({ user: { id: user.id, email: user.email, role: user.role, name: user.name } });
});

r.post("/login", async (req, res) => {
  const { email, password } = req.body as { email:string; password:string };
  const user = await prisma.user.findUnique({ where: { email }, include: { tutorProfile: true } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await argon2.verify(user.passwordHash, password).catch(()=>false);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production", maxAge: 7*24*60*60*1000 });
  res.json({ user: { id: user.id, email: user.email, role: user.role, name: user.name, tutorApproved: user.tutorProfile?.approved ?? null } });
});

r.post("/logout", (_req, res) => {
  res.clearCookie("token");
  res.json({ ok: true });
});

r.get("/me", (req, res) => {
  const token = req.cookies?.token;
  if (!token) return res.json({ user: null });
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as any;
    res.json({ user: { id: payload.id, email: payload.email, role: payload.role, name: payload.name } });
  } catch {
    res.json({ user: null });
  }
});

export default r;
