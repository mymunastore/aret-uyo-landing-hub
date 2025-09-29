// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    // Performance optimizations
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for better caching
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          icons: ["lucide-react"],
          supabase: ["@supabase/supabase-js"]
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1e3,
    // Enable source maps for production debugging
    sourcemap: mode === "production" ? false : true
  },
  // CSS optimization
  css: {
    devSourcemap: mode === "development",
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@supabase/supabase-js",
      "lucide-react"
    ],
    exclude: ["@vite/client", "@vite/env"]
  },
  // Enable experimental features for better performance
  esbuild: {
    target: "esnext",
    platform: "browser",
    format: "esm"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKV0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gUGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uc1xuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgLy8gVmVuZG9yIGNodW5rIGZvciBiZXR0ZXIgY2FjaGluZ1xuICAgICAgICAgIHZlbmRvcjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAgICAgdWk6IFtcIkByYWRpeC11aS9yZWFjdC1hY2NvcmRpb25cIiwgXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCIsIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIl0sXG4gICAgICAgICAgaWNvbnM6IFtcImx1Y2lkZS1yZWFjdFwiXSxcbiAgICAgICAgICBzdXBhYmFzZTogW1wiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE9wdGltaXplIGNodW5rIHNpemVcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBwcm9kdWN0aW9uIGRlYnVnZ2luZ1xuICAgIHNvdXJjZW1hcDogbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmYWxzZSA6IHRydWUsXG4gIH0sXG4gIC8vIENTUyBvcHRpbWl6YXRpb25cbiAgY3NzOiB7XG4gICAgZGV2U291cmNlbWFwOiBtb2RlID09PSBcImRldmVsb3BtZW50XCIsXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO2AsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIC8vIFBlcmZvcm1hbmNlIG9wdGltaXphdGlvbnNcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgXCJyZWFjdFwiLFxuICAgICAgXCJyZWFjdC1kb21cIixcbiAgICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiLFxuICAgICAgXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIixcbiAgICAgIFwibHVjaWRlLXJlYWN0XCIsXG4gICAgXSxcbiAgICBleGNsdWRlOiBbXCJAdml0ZS9jbGllbnRcIiwgXCJAdml0ZS9lbnZcIl0sXG4gIH0sXG4gIC8vIEVuYWJsZSBleHBlcmltZW50YWwgZmVhdHVyZXMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICBlc2J1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIHBsYXRmb3JtOiBcImJyb3dzZXJcIixcbiAgICBmb3JtYXQ6IFwiZXNtXCIsXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFIaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUM5RSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLElBQUksQ0FBQyw2QkFBNkIsMEJBQTBCLCtCQUErQjtBQUFBLFVBQzNGLE9BQU8sQ0FBQyxjQUFjO0FBQUEsVUFDdEIsVUFBVSxDQUFDLHVCQUF1QjtBQUFBLFFBQ3BDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixXQUFXLFNBQVMsZUFBZSxRQUFRO0FBQUEsRUFDN0M7QUFBQTtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsY0FBYyxTQUFTO0FBQUEsSUFDdkIscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsZ0JBQWdCLFdBQVc7QUFBQSxFQUN2QztBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsRUFDVjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
