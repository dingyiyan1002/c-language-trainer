#!/usr/bin/env node
// HTML 生成器 - 根据 chapters 数据生成可视化教学动画 HTML
const fs = require('fs');
const path = require('path');

// 章节与输出目录映射
const chapterMap = {
    'basics_test': '基础测试',
    'level1': 'Level1',
    'level2': 'Level2',
    'level3': 'Level3',
    'level4': 'Level4',
    'level5': 'Level5',
    'basics': '基础入门',
    'variables': '变量与数据类型',
    'operators': '运算符',
    'control': '流程控制',
    'functions': '函数',
    'arrays': '数组',
    'pointers': '指针',
    'memory': '内存管理',
    'linux': 'Linux 基础',
    'linux_cmds': 'Linux 命令',
    'embedded': '嵌入式',
    'interview': '面试题',
    'cpp': 'C++ 基础'
};

// 读取所有 TypeScript 章节文件
const chaptersDir = path.join(__dirname, 'src', 'data', 'chapters');
const outputDir = path.join(__dirname, 'HTML');

console.log('📁 读取章节文件...');

// 读取每个章节文件并提取 lessons
const allLessons = [];

// 由于无法直接执行 TypeScript，我们手动解析每个文件的内容
const chapterFiles = [
    'basics_test.ts', 'level1.ts', 'level2.ts', 'level3.ts', 'level4.ts', 'level5.ts',
    'basics.ts', 'variables.ts', 'operators.ts', 'control.ts', 'functions.ts',
    'arrays.ts', 'pointers.ts', 'memory.ts', 'linux.ts', 'linux_cmds.ts',
    'embedded.ts', 'interview.ts', 'cpp.ts'
];

// 解析 TypeScript 文件提取 lessons
function parseLessons(content, chapterId) {
    const lessons = [];

    // 提取 lessons 数组内容
    const lessonsMatch = content.match(/lessons:\s*\[([\s\S]*?)\]\s*\};/);
    if (!lessonsMatch) return lessons;

    const lessonsContent = lessonsMatch[1];

    // 提取每个 lesson 对象
    const lessonRegex = /\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*content:\s*`([\s\S]*?)`,\s*keyPoints:\s*\[([\s\S]*?)\]/g;
    let match;

    while ((match = lessonRegex.exec(lessonsContent)) !== null) {
        const id = match[1];
        const title = match[2];
        let content = match[3];
        const keyPointsStr = match[4];

        // 解析 keyPoints 数组
        const keyPoints = keyPointsStr.match(/'([^']+)'/g)?.map(k => k.slice(1, -1)) || [];

        // 清理 content 中的转义字符
        content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');

        lessons.push({ id, title, content, keyPoints });
    }

    return lessons;
}

chapterFiles.forEach(file => {
    const filePath = path.join(chaptersDir, file);
    const chapterId = file.replace('.ts', '');
    const outputName = chapterMap[chapterId] || chapterId;

    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lessons = parseLessons(content, chapterId);
        console.log(`📖 ${outputName}: ${lessons.length} lessons`);
        allLessons.push({ chapterId, outputName, lessons });
    } catch (err) {
        console.error(`❌ 读取失败 ${file}: ${err.message}`);
    }
});

console.log(`\n✨ 共找到 ${allLessons.reduce((sum, c) => sum + c.lessons.length, 0)} 个 lessons`);
console.log('\n📋 章节详情:');
allLessons.forEach(c => {
    console.log(`   ${c.outputName}: ${c.lessons.length} 个文件`);
});

// 将解析结果保存为 JSON 供后续使用
const outputJson = path.join(__dirname, 'lessons_data.json');
fs.writeFileSync(outputJson, JSON.stringify(allLessons, null, 2));
console.log(`\n💾 已保存到 ${outputJson}`);
console.log('\n✅ 解析完成！可以运行下一步生成 HTML。');
