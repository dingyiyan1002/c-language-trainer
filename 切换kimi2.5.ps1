# 切换 OpenClaw 主模型为 kimi-k2.5

$jsonPath = "$env:USERPROFILE\.openclaw\openclaw.json"

Write-Host "[INFO] Reading config..." -ForegroundColor Yellow
$json = Get-Content $jsonPath | ConvertFrom-Json

# 修改主模型
$json.agents.defaults.model.primary = "bailian/kimi-k2.5"

# 保存
$json | ConvertTo-Json -Depth 10 | Set-Content $jsonPath

Write-Host "[OK] Switched to: bailian/kimi-k2.5" -ForegroundColor Green
Write-Host "Current primary model: $($json.agents.defaults.model.primary)" -ForegroundColor Cyan

pause
