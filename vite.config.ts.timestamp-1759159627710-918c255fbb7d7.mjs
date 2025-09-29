// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { visualizer } from "file:///home/project/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    mode === "production" && visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
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
          "backend": ["@supabase/supabase-js"]
        }
      },
      // Tree shaking optimizations
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    chunkSizeWarningLimit: 500
  },
  // CSS optimization
  css: {
    devSourcemap: mode === "development"
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
      "@tanstack/react-query"
    ],
    exclude: ["@vite/client", "@vite/env", "lovable-tagger"]
  },
  esbuild: {
    target: "es2020",
    drop: mode === "production" ? ["console", "debugger"] : [],
    legalComments: "none"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBtb2RlID09PSBcInByb2R1Y3Rpb25cIiAmJiB2aXN1YWxpemVyKHtcbiAgICAgIGZpbGVuYW1lOiBcImRpc3Qvc3RhdHMuaHRtbFwiLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBnemlwU2l6ZTogdHJ1ZSxcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsXG4gICAgfSlcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25zXG4gICAgdGFyZ2V0OiBcImVzMjAyMFwiLFxuICAgIG1pbmlmeTogXCJlc2J1aWxkXCIsXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gT3B0aW1pemUgY2h1bmsgbmFtaW5nXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdLltleHRdXCIsXG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIENvcmUgUmVhY3QgbGlicmFyaWVzXG4gICAgICAgICAgXCJyZWFjdC12ZW5kb3JcIjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAgICAgLy8gUm91dGVyIGFuZCBxdWVyeVxuICAgICAgICAgIFwicm91dGVyXCI6IFtcInJlYWN0LXJvdXRlci1kb21cIiwgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIl0sXG4gICAgICAgICAgLy8gVUkgY29tcG9uZW50c1xuICAgICAgICAgIFwidWktY29yZVwiOiBbXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1kaWFsb2dcIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvblwiLFxuICAgICAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9hc3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ1aS1mb3JtXCI6IFtcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWxhYmVsXCIsXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zZWxlY3RcIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXN3aXRjaFwiLFxuICAgICAgICAgICAgXCJyZWFjdC1ob29rLWZvcm1cIixcbiAgICAgICAgICAgIFwiQGhvb2tmb3JtL3Jlc29sdmVyc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLyBJY29ucyBhbmQgdXRpbGl0aWVzXG4gICAgICAgICAgXCJ1dGlsc1wiOiBbXCJsdWNpZGUtcmVhY3RcIiwgXCJjbHN4XCIsIFwidGFpbHdpbmQtbWVyZ2VcIiwgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIl0sXG4gICAgICAgICAgLy8gQmFja2VuZFxuICAgICAgICAgIFwiYmFja2VuZFwiOiBbXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gVHJlZSBzaGFraW5nIG9wdGltaXphdGlvbnNcbiAgICAgIHRyZWVzaGFrZToge1xuICAgICAgICBtb2R1bGVTaWRlRWZmZWN0czogZmFsc2UsXG4gICAgICAgIHByb3BlcnR5UmVhZFNpZGVFZmZlY3RzOiBmYWxzZSxcbiAgICAgICAgdW5rbm93bkdsb2JhbFNpZGVFZmZlY3RzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCxcbiAgfSxcbiAgLy8gQ1NTIG9wdGltaXphdGlvblxuICBjc3M6IHtcbiAgICBkZXZTb3VyY2VtYXA6IG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgfSxcbiAgLy8gUGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uc1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBmb3JjZTogdHJ1ZSxcbiAgICBpbmNsdWRlOiBbXG4gICAgICBcInJlYWN0XCIsXG4gICAgICBcInJlYWN0LWRvbVwiLFxuICAgICAgXCJyZWFjdC1yb3V0ZXItZG9tXCIsXG4gICAgICBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiLFxuICAgICAgXCJsdWNpZGUtcmVhY3RcIixcbiAgICAgIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCIsXG4gICAgXSxcbiAgICBleGNsdWRlOiBbXCJAdml0ZS9jbGllbnRcIiwgXCJAdml0ZS9lbnZcIiwgXCJsb3ZhYmxlLXRhZ2dlclwiXSxcbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIHRhcmdldDogXCJlczIwMjBcIixcbiAgICBkcm9wOiBtb2RlID09PSBcInByb2R1Y3Rpb25cIiA/IFtcImNvbnNvbGVcIiwgXCJkZWJ1Z2dlclwiXSA6IFtdLFxuICAgIGxlZ2FsQ29tbWVudHM6IFwibm9uZVwiLFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsa0JBQWtCO0FBSDNCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGdCQUFnQixXQUFXO0FBQUEsTUFDbEMsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLHNCQUFzQjtBQUFBLElBQ3RCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBO0FBQUEsVUFFWixnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQTtBQUFBLFVBRXJDLFVBQVUsQ0FBQyxvQkFBb0IsdUJBQXVCO0FBQUE7QUFBQSxVQUV0RCxXQUFXO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFdBQVc7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFVBRUEsU0FBUyxDQUFDLGdCQUFnQixRQUFRLGtCQUFrQiwwQkFBMEI7QUFBQTtBQUFBLFVBRTlFLFdBQVcsQ0FBQyx1QkFBdUI7QUFBQSxRQUNyQztBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsV0FBVztBQUFBLFFBQ1QsbUJBQW1CO0FBQUEsUUFDbkIseUJBQXlCO0FBQUEsUUFDekIsMEJBQTBCO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxFQUN6QjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxjQUFjLFNBQVM7QUFBQSxFQUN6QjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxDQUFDLGdCQUFnQixhQUFhLGdCQUFnQjtBQUFBLEVBQ3pEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixNQUFNLFNBQVMsZUFBZSxDQUFDLFdBQVcsVUFBVSxJQUFJLENBQUM7QUFBQSxJQUN6RCxlQUFlO0FBQUEsRUFDakI7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
