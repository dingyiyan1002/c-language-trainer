import fs from 'fs';

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

console.log('=== 开始修复重复 ID ===\n');

// 找出所有题目对象的位置
const questionPattern = /\{\s*id:\s*(\d+),\s*chapter:\s*'([^']+)'/g;
const questions = [];
let match;

while ((match = questionPattern.exec(content)) !== null) {
  questions.push({
    id: parseInt(match[1]),
    chapter: match[2],
    index: match.index,
    fullMatch: match[0]
  });
}

console.log(`找到 ${questions.length} 道题目`);

// 按章节分组
const chapterGroups = new Map();
questions.forEach(q => {
  if (!chapterGroups.has(q.chapter)) {
    chapterGroups.set(q.chapter, []);
  }
  chapterGroups.get(q.chapter).push(q);
});

// 为每个章节重新分配连续的 ID
let globalId = 1;
const idReplacements = [];

chapterGroups.forEach((chapterQuestions, chapter) => {
  console.log(`\n章节 "${chapter}": ${chapterQuestions.length} 题`);
  
  // 按原 ID 排序
  chapterQuestions.sort((a, b) => a.id - b.id);
  
  chapterQuestions.forEach(q => {
    const oldId = q.id;
    const newId = globalId++;
    
    if (oldId !== newId) {
      idReplacements.push({ oldId, newId, chapter, index: q.index });
    }
  });
});

console.log(`\n需要修改 ${idReplacements.length} 个 ID`);

// 从后往前替换，避免影响前面的索引
idReplacements.reverse().forEach(({ oldId, newId, index }) => {
  const oldPattern = new RegExp(`{\\s*id:\\s*${oldId},`, 'g');
  content = content.replace(oldPattern, (match, offset) => {
    if (offset === index || Math.abs(offset - index) < 10) {
      return match.replace(`id: ${oldId}`, `id: ${newId}`);
    }
    return match;
  });
});

// 再次检查重复
const remainingIds = content.match(/id:\s*\d+/g);
const idMap = new Map();
const stillDup = new Set();

if (remainingIds) {
  remainingIds.forEach(idStr => {
    const num = parseInt(idStr.match(/\d+/)[0]);
    if (idMap.has(num)) {
      stillDup.add(num);
    } else {
      idMap.set(num, true);
    }
  });
}

if (stillDup.size > 0) {
  console.log(`\n⚠️ 警告：仍有 ${stillDup.size} 个重复 ID`);
  console.log(Array.from(stillDup).slice(0, 10).join(', '));
} else {
  console.log('\n✅ 所有重复 ID 已修复！');
  console.log(`新 ID 范围：1 - ${idMap.size}`);
}

// 保存修复后的文件
fs.writeFileSync('src/data/lessons.ts', content, 'utf8');
console.log('\n文件已保存');
