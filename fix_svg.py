# -*- coding: utf-8 -*-
# 优化 UI - 替换为 SVG 图标并应用玻璃效果

import sys

# 设置控制台编码
sys.stdout.reconfigure(encoding='utf-8')

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义 SVG 图标
svg_icons = {
    'Brain': '''<svg className="w-4 h-4 text-emerald-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1"/>
        <path d="M12 5a4 4 0 0 1 4 4v1a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1"/>
        <path d="M12 5v14"/>
        <path d="M8 12h8"/>
    </svg>''',
    'Target': '''<svg className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>''',
    'CheckCircle': '''<svg className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>''',
    'Award': '''<svg className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>''',
    'Flame': '''<svg className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>''',
    'Bookmark': '''<svg className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>''',
}

# 替换 Hero badge - 用 SVG 替换 Brain 组件
old_hero_badge = '''<Brain className="w-4 h-4 text-emerald-400 animate-pulse" />'''
new_hero_badge = svg_icons['Brain']

if old_hero_badge in content:
    content = content.replace(old_hero_badge, new_hero_badge)
    print('✓ Hero Badge 已替换为 SVG')

# 替换 Target 图标
old_target = '''<Target className="w-7 h-7 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />'''
if old_target in content:
    content = content.replace(old_target, svg_icons['Target'])
    print('✓ Target 图标已替换为 SVG')

# 替换 CheckCircle 图标
old_check = '''<CheckCircle className="w-7 h-7 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />'''
if old_check in content:
    content = content.replace(old_check, svg_icons['CheckCircle'])
    print('✓ CheckCircle 图标已替换为 SVG')

# 替换 Award 图标
old_award = '''<Award className="w-7 h-7 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />'''
if old_award in content:
    content = content.replace(old_award, svg_icons['Award'])
    print('✓ Award 图标已替换为 SVG')

# 替换 Flame 图标
old_flame = '''<Flame className="w-7 h-7 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" />'''
if old_flame in content:
    content = content.replace(old_flame, svg_icons['Flame'])
    print('✓ Flame 图标已替换为 SVG')

# 替换 Bookmark 图标
old_bookmark = '''<Bookmark className="w-7 h-7 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />'''
if old_bookmark in content:
    content = content.replace(old_bookmark, svg_icons['Bookmark'])
    print('✓ Bookmark 图标已替换为 SVG')

# 替换 H1 标题
old_h1 = '''<h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          C 语言<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">代码思维</span>训练
        </h1>'''

new_h1 = '''<h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          C 语言<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">代码思维</span>训练
        </h1>'''

if old_h1 in content:
    content = content.replace(old_h1, new_h1)
    print('✓ Hero H1 已替换')

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('\n完成！')
