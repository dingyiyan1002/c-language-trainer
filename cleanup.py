import os
import shutil

# 获取脚本所在目录
base_dir = os.path.dirname(os.path.abspath(__file__))
components_dir = os.path.join(base_dir, 'src', 'components')

# 要删除的重复目录
dirs_to_remove = ['memory', 'games', 'learning', 'layout', 'ui', 'ai']

print(f'组件目录：{components_dir}')
print('开始清理重复目录...\n')

for dir_name in dirs_to_remove:
    full_path = os.path.join(components_dir, dir_name)
    if os.path.exists(full_path):
        print(f'正在删除：{dir_name}')
        shutil.rmtree(full_path)
        print(f'已删除：{dir_name}\n')
    else:
        print(f'目录不存在：{dir_name}')

print('清理完成!')
print('\n剩余组件:')
for item in os.listdir(components_dir):
    print(f'  - {item}')
