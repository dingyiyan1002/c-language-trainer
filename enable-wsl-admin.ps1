# Enable WSL Feature - Requires Admin Rights
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

# Enable WSL feature
Write-Host "Enabling WSL feature..." -ForegroundColor Yellow
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux -NoRestart

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "WSL feature has been enabled." -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Install Ubuntu: wsl --install -d Ubuntu" -ForegroundColor White
Write-Host "2. Or run: ubuntu.exe" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
