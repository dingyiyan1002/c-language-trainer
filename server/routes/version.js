import { exec } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);
export function setupVersionRoutes(app, PROJECT_ROOT) {
  app.post('/api/version/snapshot', async (req, res) => {
    try {
      const { message, isAuto = false } = req.body;
      if (!message) return res.status(400).json({ success: false, message: '快照消息不能为空' });
      await execAsync('git add -A', { cwd: PROJECT_ROOT });
      const { stdout: status } = await execAsync('git status --porcelain', { cwd: PROJECT_ROOT });
      if (!status.trim()) return res.status(400).json({ success: false, message: '没有需要保存的更改' });
      const prefix = isAuto ? '[Auto Snapshot]' : '[Snapshot]';
      await execAsync('git commit --no-verify -m "' + prefix + ' ' + message + '"', { cwd: PROJECT_ROOT });
      const { stdout: log } = await execAsync('git log -1 --format="%H|%h|%s|%ai|%an"', { cwd: PROJECT_ROOT });
      const [hash, shortHash, msg, timestamp, author] = log.trim().split('|');
      const { stdout: stats } = await execAsync('git show --stat --format="" HEAD', { cwd: PROJECT_ROOT });
      const changes = { added: 0, modified: 0, deleted: 0 };
      const insertMatch = stats.match(/(\d+) insertion/);
      const deleteMatch = stats.match(/(\d+) deletion/);
      if (insertMatch) changes.added = parseInt(insertMatch[1]);
      if (deleteMatch) changes.deleted = parseInt(deleteMatch[1]);
      changes.modified = changes.added + changes.deleted;
      res.json({ success: true, message: '快照创建成功', data: { hash, shortHash, message: msg.replace(prefix, '').trim(), timestamp: new Date(timestamp).getTime(), author, isAuto, changes } });
    } catch (error) { res.status(500).json({ success: false, message: '创建快照失败', error: error.message }); }
  });
  app.get('/api/version/history', async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 20;
      const { stdout: log } = await execAsync('git log --max-count=' + limit + ' --format="%H|%h|%s|%ai|%an"', { cwd: PROJECT_ROOT });
      const commits = log.trim().split('\n').map(line => {
        const [hash, shortHash, message, timestamp, author] = line.split('|');
        return { hash, shortHash, message: message.replace(/\[Auto Snapshot\]|\[Snapshot\]/g, '').trim(), timestamp: new Date(timestamp).getTime(), author, isAuto: message.includes('[Auto Snapshot]'), changes: { added: 0, modified: 0, deleted: 0 } };
      });
      res.json({ success: true, data: commits });
    } catch (error) { res.status(500).json({ success: false, message: '获取历史失败', error: error.message }); }
  });
  app.post('/api/version/rollback', async (req, res) => {
    try {
      const { hash, force = false } = req.body;
      if (!hash) return res.status(400).json({ success: false, message: '版本号不能为空' });
      const { stdout: status } = await execAsync('git status --porcelain', { cwd: PROJECT_ROOT });
      if (status.trim() && !force) return res.status(400).json({ success: false, message: '存在未提交的更改', hasUncommittedChanges: true });
      if (force && status.trim()) { await execAsync('git reset --hard HEAD', { cwd: PROJECT_ROOT }); await execAsync('git clean -fd', { cwd: PROJECT_ROOT }); }
      await execAsync('git reset --hard ' + hash, { cwd: PROJECT_ROOT });
      const { stdout: log } = await execAsync('git log -1 --format="%h|%s"', { cwd: PROJECT_ROOT });
      const [shortHash] = log.trim().split('|');
      res.json({ success: true, message: '已成功回滚到版本 ' + shortHash, fromVersion: 'HEAD', toVersion: shortHash });
    } catch (error) { res.status(500).json({ success: false, message: '回滚失败', error: error.message }); }
  });
  app.post('/api/version/reset', async (req, res) => {
    try {
      await execAsync('git checkout -- .', { cwd: PROJECT_ROOT });
      await execAsync('git clean -fd', { cwd: PROJECT_ROOT });
      res.json({ success: true, message: '工作区已重置' });
    } catch (error) { res.status(500).json({ success: false, message: '重置失败', error: error.message }); }
  });
}
