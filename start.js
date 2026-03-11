// 启动脚本 - 同时启动前端和后端
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 正在启动应用...');
console.log('');

// 启动后端服务器
const server = spawn('node', ['index.js'], {
  cwd: path.join(__dirname, 'server'),
  stdio: 'inherit'
});

// 等待 1 秒后启动前端
setTimeout(() => {
  console.log('');
  console.log('🎨 正在启动前端...');

  const frontend = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  frontend.on('error', (err) => {
    console.error('❌ 前端启动失败:', err.message);
  });
}, 1000);

server.on('error', (err) => {
  console.error('❌ 后端启动失败:', err.message);
});

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n👋 正在关闭服务...');
  server.kill();
  process.exit();
});
