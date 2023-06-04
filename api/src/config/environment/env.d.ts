declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      JWT_SECRET: string;
      MODE_URL: "dev" | "v1";
    }
  }
}
export {};
