// Run: node server/seed-admin.js (after npm install & prisma migrate)
import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const email = "admin@oxbridge.local";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return console.log("admin exists");
  const pw = "AdminPass123!"; // change after creation
  const hash = await argon2.hash(pw);
  const user = await prisma.user.create({ data: { name: "Admin", email, passwordHash: hash, role: "admin" } });
  console.log("created admin:", user.email, "password:", pw);
}
main().catch(e=>{ console.error(e); process.exit(1); }).finally(()=>prisma.$disconnect());
