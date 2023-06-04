import { MODE_URL, NODE_ENV } from "./";

(() => {
  if (MODE_URL === "v1" && NODE_ENV === "production") return;
  if (MODE_URL === "dev" && NODE_ENV === "development") return;
  process.exit(1);
})();
