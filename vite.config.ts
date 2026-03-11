import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Brotli 压缩
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    // Gzip 压缩
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
  // 依赖预构建优化
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      'clsx',
      'tailwind-merge',
      '@tanstack/react-virtual',
    ],
  },
  build: {
    // 压缩优化
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info'],
        // 移除死代码
        pure_getters: true,
        // 更激进的优化
        passes: 2,
        // 内联常量
        evaluate: true,
      },
      format: {
        comments: false,
      },
    },
    // 目标浏览器
    target: 'esnext',
    // 资源大小限制
    assetsInlineLimit: 4096,
    // 生成 sourcemap（生产环境可选）
    sourcemap: false,
    // 块大小警告
    chunkSizeWarningLimit: 500,
    // 代码分割配置 - 支持懒加载
    rollupOptions: {
      output: {
        // 手动代码分割 - 将大组件分离到独立 chunk
        manualChunks(id) {
          // node_modules 包分离
          if (id.includes('/node_modules/')) {
            if (id.includes('/react/') || id.includes('/react-dom/')) {
              return 'vendor';
            }
            if (id.includes('/lucide-react/')) {
              return 'icons';
            }
            if (id.includes('/clsx/') || id.includes('/tailwind-merge/')) {
              return 'utils';
            }
          }
          // 确保 utils 目录的代码进入主包
          if (id.includes('/src/utils/')) {
            return 'index';
          }
          // 确保 hooks 进入主包
          if (id.includes('/src/hooks/')) {
            return 'index';
          }
          // 确保 data 目录进入主包
          if (id.includes('/src/data/')) {
            return 'index';
          }
          // 确保 learning 组件进入主包
          if (id.includes('/src/components/learning/')) {
            return 'index';
          }
        },
      },
    },
    // 压缩并发限制
    maxParallelFileOps: 4,
  },
  // CSS 优化
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // 自定义日志
  customLogger: {
    info(msg) {
      if (msg.includes('[vite]') && (msg.includes('hmr update') || msg.includes('hmr connected'))) {
        return;
      }
      console.log(msg);
    },
    warn(msg) {
      if (msg.includes('DeprecationWarning') || msg.includes('[DEP0190]')) {
        return;
      }
      console.warn(msg);
    },
    error(msg) {
      console.error(msg);
    },
    hasErrorEnabled() {
      return true;
    }
  }
});
