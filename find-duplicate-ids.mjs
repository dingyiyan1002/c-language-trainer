import fs from 'fs';

const content = fs.readFileSync('src/data/lessons.ts', 'utf8');

// 找出所有重复的 ID
const ids = content.matchAll(/id:\s*(\d+),/g);
const idMap = new Map();
const duplicates = new Set();

for (const match of ids) {
  const num = parseInt(match[1]);
  if (idMap.has(num)) {
    duplicates.add(num);
  } else {
    idMap.set(num, match.index);
  }
}

console.log(`发现 ${duplicates.size} 个重复 ID\n`);
console.log('重复 ID 列表:');
console.log(Array.from(duplicates).sort((a,b) => a-b).join(', '));

// 找出每个重复 ID 的位置
console.log('\n\n重复详情:');
const dupList = Array.from(duplicates).sort((a,b) => a-b);
dupList.slice(0, 20).forEach(id => {
  const regex = new RegExp(`id:\\s*${id},`, 'g');
  const matches = [...content.matchAll(regex)];
  console.log(`\nID ${id}: 出现 ${matches.length} 次`);
  matches.forEach((m, idx) => {
    const start = Math.max(0, m.index - 50);
    const context = content.substring(start, m.index + 30).replace(/\n/g, ' ');
    console.log(`  位置${idx+1}: ...${context}...`);
  });
});
