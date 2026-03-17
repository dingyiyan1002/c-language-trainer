# WSL 1 Force - Simple Version
Write-Host "=== WSL 1 Force Fix ===" -ForegroundColor Cyan

# 1. Kill processes
Write-Host "[1/5] Killing processes..." -ForegroundColor Yellow
taskkill /F /IM wsl.exe 2>$null
taskkill /F /IM ubuntu* 2>$null
taskkill /F /IM vmmem* 2>$null
Start-Sleep -Seconds 2

# 2. Unregister distros
Write-Host "[2/5] Unregistering distros..." -ForegroundColor Yellow
wsl --unregister Ubuntu 2>&1 | Out-Null
wsl --unregister Ubuntu-24.04 2>&1 | Out-Null
Start-Sleep -Seconds 1

# 3. Set WSL 1 default
Write-Host "[3/5] Setting WSL 1 default..." -ForegroundColor Yellow
wsl --set-default-version 1
Write-Host "Done" -ForegroundColor Green

# 4. Configure registry
Write-Host "[4/5] Configuring registry..." -ForegroundColor Yellow
$lxssPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss"
New-ItemProperty -Path $lxssPath -Name "DefaultVersion" -Value 1 -PropertyType DWORD -Force 2>$null
Write-Host "Done" -ForegroundColor Green

# 5. Install Ubuntu via winget
Write-Host "[5/5] Installing Ubuntu..." -ForegroundColor Yellow
$proc = Start-Process -FilePath "winget.exe" -ArgumentList "install","-e","--id","Canonical.Ubuntu.2404.LTS","--silent","--force" -PassThru -Wait -NoNewWindow
if ($proc.ExitCode -eq 0) {
    Write-Host "Ubuntu installed" -ForegroundColor Green
} else {
    Write-Host "Winget exit code: $($proc.ExitCode)" -ForegroundColor Yellow
}

# Test
Write-Host ""
Write-Host "=== Testing ===" -ForegroundColor Cyan
wsl -l -v
Write-Host ""
ubuntu run echo "WSL test successful" 2>&1 | Write-Host

Write-Host ""
Write-Host "=== Complete ===" -ForegroundColor Green
Read-Host "Press Enter"
