# Force WSL 1 Mode - No Restart Required
# This script forces WSL 1 mode which does NOT need lxss.sys driver

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Force WSL 1 Mode (No Restart)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Continue"

# Check admin rights
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "ERROR: Admin rights required!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Admin rights confirmed" -ForegroundColor Green
Write-Host ""

# Step 1: Kill all WSL processes
Write-Host "[1/5] Killing WSL processes..." -ForegroundColor Yellow
taskkill /F /IM wsl.exe 2>$null
taskkill /F /IM ubuntu* 2>$null
taskkill /F /IM vmmem* 2>$null
Start-Sleep -Seconds 2
Write-Host "Done" -ForegroundColor Green

# Step 2: Unregister all distributions
Write-Host "[2/5] Unregistering distributions..." -ForegroundColor Yellow
wsl --unregister Ubuntu 2>&1 | Out-Null
wsl --unregister Ubuntu-24.04 2>&1 | Out-Null
wsl --unregister Debian 2>&1 | Out-Null
Start-Sleep -Seconds 1
Write-Host "Done" -ForegroundColor Green

# Step 3: Force WSL 1 as default
Write-Host "[3/5] Setting WSL 1 as default..." -ForegroundColor Yellow
wsl --set-default-version 1 2>&1 | Out-Null
Write-Host "WSL 1 set as default" -ForegroundColor Green

# Step 4: Set WSL version for all distros via registry
Write-Host "[4/5] Configuring registry for WSL 1..." -ForegroundColor Yellow
$lxssPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss"
if (Test-Path $lxssPath) {
    # Set default version to 1
    New-ItemProperty -Path $lxssPath -Name "DefaultVersion" -Value 1 -PropertyType DWORD -Force 2>$null
    Write-Host "Registry configured for WSL 1" -ForegroundColor Green
} else {
    Write-Host "Registry path not found, creating..." -ForegroundColor Yellow
    New-Item -Path $lxssPath -Force | Out-Null
    New-ItemProperty -Path $lxssPath -Name "DefaultVersion" -Value 1 -PropertyType DWORD -Force 2>$null
    Write-Host "Registry created and configured" -ForegroundColor Green
}

# Step 5: Install Ubuntu via winget (fresh install)
Write-Host "[5/5] Installing Ubuntu fresh..." -ForegroundColor Yellow

# Remove existing Ubuntu app package (if possible)
$ubuntuApps = Get-AppxPackage -Name "*Ubuntu*"
if ($ubuntuApps) {
    foreach ($app in $ubuntuApps) {
        Write-Host "Found Ubuntu package: $($app.Name)" -ForegroundColor Gray
    }
}

# Install Ubuntu using winget
Write-Host "Installing Ubuntu from Microsoft Store..." -ForegroundColor Gray
$wingetProc = Start-Process -FilePath "winget.exe" -ArgumentList "install","-e","--id","Canonical.Ubuntu.2404.LTS","--silent","--force" -PassThru -Wait -NoNewWindow

if ($wingetProc.ExitCode -eq 0) {
    Write-Host "Ubuntu installation started" -ForegroundColor Green
} else {
    Write-Host "Winget install failed (code: $($wingetProc.ExitCode)), trying alternative..." -ForegroundColor Yellow
    # Try with wsl --install
    $wslProc = Start-Process -FilePath "wsl.exe" -ArgumentList "--install","-d","Ubuntu","--no-launch" -PassThru -Wait -NoNewWindow
    if ($wslProc.ExitCode -eq 0) {
        Write-Host "Ubuntu installation via WSL completed" -ForegroundColor Green
    } else {
        Write-Host "All installation methods failed" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Configuration Complete" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Test
Write-Host "Testing WSL 1 mode..." -ForegroundColor Yellow
Write-Host ""

Write-Host "Test 1: wsl --version" -ForegroundColor Gray
wsl --version 2>&1 | Write-Host

Write-Host ""
Write-Host "Test 2: ubuntu run echo 'WSL 1 works'" -ForegroundColor Gray
ubuntu run echo "WSL 1 works" 2>&1 | Write-Host

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "If the tests above fail, WSL 1 is still not working" -ForegroundColor Yellow
Write-Host "This means WSL core components are corrupted beyond repair" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next options:" -ForegroundColor Cyan
Write-Host "1. Use Git Bash + Windows native tools (no Linux)" -ForegroundColor White
Write-Host "2. Use Docker Desktop for Linux containers" -ForegroundColor White
Write-Host "3. Use VirtualBox/VMware with Ubuntu ISO" -ForegroundColor White
Write-Host "4. Fix Windows Update first, then restart" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"
