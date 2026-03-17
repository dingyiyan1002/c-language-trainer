# Enable WSL Feature - Final Attempt
# Run this script as Administrator

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Enable WSL Feature (Admin Required)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check admin rights
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "ERROR: Admin rights required!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please right-click this script and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Admin rights confirmed" -ForegroundColor Green
Write-Host ""

# Kill all WSL processes first
Write-Host "Stopping WSL processes..." -ForegroundColor Yellow
Get-Process wsl -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 3

# Enable WSL feature using DISM
Write-Host "Enabling WSL feature using DISM..." -ForegroundColor Yellow
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

Write-Host ""
Write-Host "Enabling Virtual Machine Platform feature..." -ForegroundColor Yellow
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "WSL feature has been enabled." -ForegroundColor White
Write-Host ""
Write-Host "A restart is REQUIRED for WSL to work." -ForegroundColor Red
Write-Host ""
Write-Host "After restart, run: wsl --install -d Ubuntu" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"
