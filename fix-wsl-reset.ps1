# WSL Complete Reset Script
# Run in Administrator PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL Complete Reset" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Continue"

# Step 1: Kill WSL processes
Write-Host "[1/6] Killing WSL processes..." -ForegroundColor Yellow
taskkill /F /IM wsl.exe 2>$null
taskkill /F /IM ubuntu* 2>$null
taskkill /F /IM vmmem* 2>$null
Start-Sleep -Seconds 2

# Step 2: Unregister distributions
Write-Host "[2/6] Unregistering distributions..." -ForegroundColor Yellow
wsl --unregister Ubuntu 2>&1 | Out-Null
wsl --unregister Ubuntu-24.04 2>&1 | Out-Null
wsl --unregister Debian 2>&1 | Out-Null
Start-Sleep -Seconds 1

# Step 3: Clean registry
Write-Host "[3/6] Cleaning registry..." -ForegroundColor Yellow
$lxssPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss"
if (Test-Path $lxssPath) {
    Remove-Item -Path $lxssPath -Recurse -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
    New-Item -Path $lxssPath -Force | Out-Null
    New-Item -Path "$lxssPath\Plugins" -Force | Out-Null
    Write-Host "Registry cleaned" -ForegroundColor Green
}

# Step 4: Reset WSL feature
Write-Host "[4/6] Resetting WSL feature..." -ForegroundColor Yellow
Start-Process -FilePath "dism.exe" -ArgumentList "/online","/disable-feature","/featurename:Microsoft-Windows-Subsystem-Linux","/norestart" -NoNewWindow -Wait
Start-Sleep -Seconds 3
Start-Process -FilePath "dism.exe" -ArgumentList "/online","/enable-feature","/featurename:Microsoft-Windows-Subsystem-Linux","/all","/norestart" -NoNewWindow -Wait
Start-Sleep -Seconds 3
Write-Host "WSL feature reset" -ForegroundColor Green

# Step 5: Install WSL kernel
Write-Host "[5/6] Installing WSL kernel..." -ForegroundColor Yellow
$msiPath = "C:\Users\6\Downloads\wsl_update_x64.msi"
if (Test-Path $msiPath) {
    $proc = Start-Process -FilePath "msiexec.exe" -ArgumentList "/i",$msiPath,"/quiet","/norestart" -PassThru -Wait
    if ($proc.ExitCode -eq 0) {
        Write-Host "WSL kernel installed" -ForegroundColor Green
    } else {
        Write-Host "WSL kernel install failed: $($proc.ExitCode)" -ForegroundColor Red
    }
} else {
    Write-Host "MSI not found, skipping" -ForegroundColor Yellow
}
Start-Sleep -Seconds 2

# Step 6: Set WSL 1 and install Ubuntu
Write-Host "[6/6] Setting WSL 1 and installing Ubuntu..." -ForegroundColor Yellow
wsl --set-default-version 1 2>&1 | Out-Null
$ubuntuProc = Start-Process -FilePath "wsl.exe" -ArgumentList "--install","-d","Ubuntu","--no-launch" -PassThru -Wait -NoNewWindow
if ($ubuntuProc.ExitCode -eq 0) {
    Write-Host "Ubuntu installed" -ForegroundColor Green
} else {
    Write-Host "Ubuntu install failed: $($ubuntuProc.ExitCode)" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Complete" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Test: ubuntu run echo hello" -ForegroundColor Cyan
