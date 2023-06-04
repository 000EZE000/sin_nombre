import "dotenv/config";

export const { NODE_ENV, MODE_URL } = process.env;

export const PORT = process.env.PORT ?? "8888";
export const JWT_SECRET = process.env.JWT_SECRET ?? "";
