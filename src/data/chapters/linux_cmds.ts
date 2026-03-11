// linux-cmds 章节数据
import type { Chapter } from '../types';

export const linux_cmds: Chapter = {
    id: 'linux-cmds',
    name: 'Linux常用命令',
    icon: 'Keyboard️',
    description: '掌握Linux开发必备命令：文件操作、进程管理、网络调试、文本处理',
    questionCount: 20,
    mode: 'practice',
    lessons: [
      {
        id: 'linux-cmds-1',
        title: '文件与目录操作',
        content: `Linux文件操作核心命令：

**ls - 列出目录内容**
- -l: 详细信息（权限、大小、时间）
- -a: 显示隐藏文件
- -h: 人类可读大小
- -R: 递归列出

**cd/pwd - 目录导航**
- cd -: 返回上一个目录
- pwd: 显示当前路径

**cp/mv/rm - 文件操作**
- cp -r: 递归复制目录
- mv: 移动或重命名
- rm -rf: 强制递归删除（慎用！）

**find - 查找文件**
- find /path -name "*.c": 按名称查找
- find /path -mtime -7: 7天内修改的文件`,
        keyPoints: ['ls -la查看详细信息', 'rm -rf慎用', 'find按条件查找']
      },
      {
        id: 'linux-cmds-2',
        title: '权限与用户管理',
        content: `Linux权限系统：

**chmod - 修改权限**
- 数字模式：chmod 755 file
- 符号模式：chmod +x file
- 递归：chmod -R 755 dir/

**chown - 修改所有者**
- chown user:group file
- chown -R user:group dir/

**权限含义**
- r(4): 读权限
- w(2): 写权限
- x(1): 执行权限
- 755 = rwxr-xr-x

**sudo/su**
- sudo: 以root执行命令
- su -: 切换到root用户`,
        keyPoints: ['chmod 755常用权限', 'chown修改所有者', 'sudo提权']
      },
      {
        id: 'linux-cmds-3',
        title: '进程管理',
        content: `Linux进程管理命令：

**ps - 查看进程**
- ps aux: 显示所有进程详情
- ps -ef: 完整格式显示
- ps aux | grep nginx: 查找特定进程

**top/htop - 动态监控**
- top: 实时进程监控
- htop: 增强版（需安装）
- 按P按CPU排序，按M按内存排序

**kill - 发送信号**
- kill PID: 默认SIGTERM
- kill -9 PID: SIGKILL强制终止
- kill -l: 列出所有信号

**后台运行**
- command &: 后台运行
- nohup command &: 忽略挂断信号
- jobs: 查看后台任务`,
        keyPoints: ['ps aux查看进程', 'kill -9强制终止', 'nohup后台运行']
      },
      {
        id: 'linux-cmds-4',
        title: '网络命令',
        content: `Linux网络调试命令：

**netstat - 网络状态**
- netstat -tlnp: 查看监听端口
- netstat -an: 所有连接
- netstat -s: 统计信息

**ss - 新版网络工具**
- ss -tlnp: 查看TCP监听
- ss -s: 连接统计摘要

**curl/wget - HTTP请求**
- curl -I URL: 只获取响应头
- curl -X POST -d "data" URL: POST请求
- wget URL: 下载文件

**ping/telnet/nc**
- ping: 测试网络连通性
- telnet host port: 测试端口
- nc -zv host port: 扫描端口`,
        keyPoints: ['netstat -tlnp查看端口', 'curl测试HTTP', 'nc扫描端口']
      },
      {
        id: 'linux-cmds-5',
        title: '文本处理三剑客',
        content: `Linux文本处理核心工具：

**grep - 文本搜索**
- grep "pattern" file: 搜索匹配行
- grep -r "pattern" dir/: 递归搜索
- grep -i: 忽略大小写
- grep -n: 显示行号
- grep -v: 反向匹配

**sed - 流编辑器**
- sed 's/old/new/g' file: 全局替换
- sed -i: 直接修改文件
- sed -n '10,20p' file: 打印10-20行

**awk - 文本分析**
- awk '{print $1}': 打印第一列
- awk -F: '{print $1}': 指定分隔符
- awk '{sum+=$1} END{print sum}': 求和

**管道组合**
- cat file | grep "error" | wc -l
- 统计error出现次数`,
        keyPoints: ['grep搜索文本', 'sed替换文本', 'awk分析列数据']
      }
    ]
  };

export default linux_cmds;
