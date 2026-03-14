import re

file_path = r'C:\Users\6\Downloads\web-development-request-received - 副本\src\data\lessons.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 查找所有包含 emoji 的 icon 定义
pattern = r"icon: '(\w+)️'"
matches = re.findall(pattern, content)
print(f'找到 {len(matches)} 个带 emoji 的图标:')
for m in matches:
    print(f'  - {m}️')

# 修复所有带有 emoji 变体选择符的图标名称
content = re.sub(r"icon: '(\w+)️'", r"icon: '\1'", content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('\n已修复所有图标名称！')

# 验证
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()
remaining = re.findall(r"icon: '(\w+)️'", content)
if remaining:
    print(f'警告：还有 {len(remaining)} 个未修复:')
    for m in remaining:
        print(f'  - {m}️')
else:
    print('验证通过：所有图标名称已修复！')
