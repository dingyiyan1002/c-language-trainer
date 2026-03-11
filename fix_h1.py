# -*- coding: utf-8 -*-
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 只替换渐变色部分
old_grad = 'from-emerald-400 to-cyan-400'
new_grad = 'from-emerald-400 via-cyan-400 to-blue-400'

count = content.count(old_grad)
print(f'Found {count} occurrences')

if count > 0:
    content = content.replace(old_grad, new_grad)
    print('Gradient updated')

    # 替换 H1 className
    old_h1_class = '<h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? \'text-white\' : \'text-slate-800\'`}>'
    new_h1_class = '<h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">'

    if old_h1_class in content:
        content = content.replace(old_h1_class, new_h1_class)
        print('H1 class updated')
    else:
        print('H1 class not found, trying alternative...')
        # 尝试另一种格式
        import re
        pattern = r'<h1 className=\{`text-3xl sm:text-4xl font-bold mb-4 \$\{isDarkMode \? \'text-white\' : \'text-slate-800\'\}`\}>'
        if re.search(pattern, content):
            content = re.sub(pattern, new_h1_class, content)
            print('H1 class updated (regex)')

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
