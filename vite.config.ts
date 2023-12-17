import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/luma-three-testbed/",
    };
  }
  return {};
});
