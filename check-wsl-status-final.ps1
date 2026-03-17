# WSL Installation Status Report
# Run this script to check WSL installation status

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL Installation Status Report" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check if Ubuntu is installed
Write-Host "[1/5] Checking Ubuntu installation..." -ForegroundColor Yellow
$ubuntu = Get-AppxPackage -Name '*Ubuntu*' -ErrorAction SilentlyContinue
if ($ubuntu) {
    Write-Host "Ubuntu found: $($ubuntu.Name)" -ForegroundColor Green
    Write-Host "Version: $($ubuntu.Version)" -ForegroundColor Green
} else {
    Write-Host "Ubuntu NOT found!" -ForegroundColor Red
}
Write-Host ""

# 2. Check WSL processes
Write-Host "[2/5] Checking WSL processes..." -ForegroundColor Yellow
$wslProcesses = Get-Process wsl -ErrorAction SilentlyContinue
if ($wslProcesses) {
    Write-Host "WSL processes running: $($wslProcesses.Count)" -ForegroundColor Green
    $wslProcesses | ForEach-Object { Write-Host "  PID: $($_.Id) - Started: $($_.StartTime)" }
} else {
    Write-Host "No WSL processes running" -ForegroundColor Yellow
}
Write-Host ""

# 3. Check wsl.exe availability
Write-Host "[3/5] Checking wsl.exe..." -ForegroundColor Yellow
$wslPath = Get-Command wsl -ErrorAction SilentlyContinue
if ($wslPath) {
    Write-Host "wsl.exe found: $($wslPath.Source)" -ForegroundColor Green
} else {
    Write-Host "wsl.exe NOT found!" -ForegroundColor Red
}
Write-Host ""

# 4. Try to list distributions
Write-Host "[4/5] Testing WSL command..." -ForegroundColor Yellow
$result = wsl --list 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "WSL command works!" -ForegroundColor Green
    Write-Host $result
} else {
    Write-Host "WSL command failed (this is normal if WSL feature is being enabled)" -ForegroundColor Yellow
}
Write-Host ""

# 5. Check DISM status
Write-Host "[5/5] Checking Windows features..." -ForegroundColor Yellow
Write-Host "Note: Feature check requires admin rights" -ForegroundColor Gray
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Summary & Next Steps" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($ubuntu) {
    Write-Host "Ubuntu is installed." -ForegroundColor Green

    if ($wslPath) {
        Write-Host "WSL platform is installed." -ForegroundColor Green
        Write-Host ""
        Write-Host "If WSL feature was just enabled via DISM, a RESTART is required." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "After restart, run:" -ForegroundColor Cyan
        Write-Host "  wsl --install -d Ubuntu" -ForegroundColor White
        Write-Host "OR" -ForegroundColor White
        Write-Host "  ubuntu.exe" -ForegroundColor White
    } else {
        Write-Host "WSL platform NOT installed!" -ForegroundColor Red
        Write-Host "Run: wsl --install" -ForegroundColor Cyan
    }
} else {
    Write-Host "Ubuntu is NOT installed." -ForegroundColor Red
    Write-Host "Run: wsl --install -d Ubuntu" -ForegroundColor Cyan
}

Write-Host ""
Read-Host "Press Enter to exit"
