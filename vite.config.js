import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };
  if (command !== "serve") {
    config.base = "/brototype-week11-todo-app/";
  }

  return config;
});
