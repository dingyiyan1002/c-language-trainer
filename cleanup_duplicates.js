const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src', 'components');
const dirsToRemove = ['memory', 'games', 'learning', 'layout', 'ui', 'ai'];

console.log('组件目录:', base);
console.log('开始清理重复目录...\n');

dirsToRemove.forEach(dir => {
    const fullPath = path.join(base, dir);
    if (fs.existsSync(fullPath)) {
        console.log(`正在删除：${dir}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
        console.log(`已删除：${dir}\n`);
    } else {
        console.log(`目录不存在：${dir}`);
    }
});

console.log('清理完成!');
console.log('\n剩余组件:');
fs.readdirSync(base).forEach(file => {
    console.log(`  - ${file}`);
});
