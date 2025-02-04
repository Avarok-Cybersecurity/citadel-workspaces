import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Content-Security-Policy': "default-src 'self' https://cdn.gpteng.co; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; connect-src 'self' https://cdn.gpteng.co ws://localhost:8080; frame-src 'self' https://cdn.gpteng.co; img-src 'self' data: https://cdn.gpteng.co;"
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));