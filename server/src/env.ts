import "dotenv/config";
export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET || "dev-secret",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:8080",
  NODE_ENV: process.env.NODE_ENV || "development",
  SOCKET_ORIGIN: process.env.SOCKET_ORIGIN || "http://localhost:8080",
};
