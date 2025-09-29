import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "production" && visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Performance optimizations
    target: "es2020",
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Optimize chunk naming
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          // Core React libraries
          "react-vendor": ["react", "react-dom"],
          // Router and query
          "router": ["react-router-dom", "@tanstack/react-query"],
          // UI components
          "ui-core": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-accordion",
            "@radix-ui/react-toast"
          ],
          "ui-form": [
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-switch",
            "react-hook-form",
            "@hookform/resolvers"
          ],
          // Icons and utilities
          "utils": ["lucide-react", "clsx", "tailwind-merge", "class-variance-authority"],
          // Backend
          "backend": ["@supabase/supabase-js"],
        },
      },
      // Tree shaking optimizations
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    chunkSizeWarningLimit: 500,
  },
  // CSS optimization
  css: {
    devSourcemap: mode === "development",
  },
  // Performance optimizations
  optimizeDeps: {
    force: true,
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@supabase/supabase-js",
      "lucide-react",
      "@tanstack/react-query",
    ],
    exclude: ["@vite/client", "@vite/env", "lovable-tagger"],
  },
  esbuild: {
    target: "es2020",
    drop: mode === "production" ? ["console", "debugger"] : [],
    legalComments: "none",
  },
}));
