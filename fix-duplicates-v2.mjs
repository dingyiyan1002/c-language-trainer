import fs from 'fs';

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

console.log('=== 深度修复重复 ID ===\n');

// 提取所有章节数组
const chaptersMatch = content.match(/export const chapters: Chapter\[\] = \[([\s\S]*)\];/);
if (!chaptersMatch) {
  console.log('❌ 无法找到 chapters 数组');
  process.exit(1);
}

// 找出所有题目
const questionPattern = /\{\s*id:\s*(\d+),\s*chapter:\s*'([^']+)'/g;
const questions = [];
let match;

while ((match = questionPattern.exec(content)) !== null) {
  questions.push({
    id: parseInt(match[1]),
    chapter: match[2],
    index: match.index,
    match: match[0]
  });
}

console.log(`找到 ${questions.length} 道题目`);

// 创建 ID -> 位置的映射
const idToQuestions = new Map();
questions.forEach(q => {
  if (!idToQuestions.has(q.id)) {
    idToQuestions.set(q.id, []);
  }
  idToQuestions.get(q.id).push(q);
});

// 找出重复的 ID
const duplicates = [];
idToQuestions.forEach((qs, id) => {
  if (qs.length > 1) {
    duplicates.push({ id, count: qs.length, chapters: [...new Set(qs.map(q => q.chapter))] });
  }
});

console.log(`发现 ${duplicates.length} 个重复 ID\n`);

// 为每个重复 ID 分配新 ID
const replacements = [];
let nextId = Math.max(...questions.map(q => q.id)) + 1;

duplicates.forEach(({ id, count, chapters }) => {
  console.log(`ID ${id} 重复 ${count} 次，章节：${chapters.join(', ')}`);
  
  const qs = idToQuestions.get(id);
  // 保留第一个，修改后面的
  for (let i = 1; i < qs.length; i++) {
    const q = qs[i];
    replacements.push({
      oldId: id,
      newId: nextId++,
      index: q.index,
      chapter: q.chapter
    });
    console.log(`  → 修改为 ${nextId-1} (章节：${q.chapter})`);
  }
});

console.log(`\n需要修改 ${replacements.length} 个 ID`);

// 从后往前替换
replacements.sort((a, b) => b.index - a.index).forEach(({ oldId, newId, index }) => {
  const before = content.substring(Math.max(0, index - 20), index + 30).replace(/\n/g, ' ');
  content = content.substring(0, index) + 
            content.substring(index).replace(`id: ${oldId},`, `id: ${newId},`);
});

// 验证
const finalIds = content.match(/\{\s*id:\s*(\d+),/g);
const finalIdMap = new Map();
let finalDup = 0;

if (finalIds) {
  finalIds.forEach(idStr => {
    const num = parseInt(idStr.match(/\d+/)[0]);
    if (finalIdMap.has(num)) {
      finalDup++;
    } else {
      finalIdMap.set(num, true);
    }
  });
}

if (finalDup > 0) {
  console.log(`\n⚠️ 仍有 ${finalDup} 个重复`);
} else {
  console.log(`\n✅ 修复完成！无重复 ID`);
  console.log(`ID 范围：1 - ${finalIdMap.size}`);
}

fs.writeFileSync('src/data/lessons.ts', content, 'utf8');
console.log('\n文件已保存');
