# Qwen Code API Key Update Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Qwen Code API Key Update Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$NEW_API_KEY = "sk-sp-3948ead58498463a9ea10807d8a0682c"
$NEW_BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"

# Qwen Code config directory
$CONFIG_DIR = "$env:USERPROFILE\.qwen-code"

Write-Host "Config directory: $CONFIG_DIR" -ForegroundColor Yellow
Write-Host ""

# Check if config directory exists
if (Test-Path $CONFIG_DIR) {
    Write-Host "Found config directory" -ForegroundColor Green
    
    # Find all possible config files
    $configFiles = @(
        "$CONFIG_DIR\config.json",
        "$CONFIG_DIR\.env",
        "$CONFIG_DIR\.env.local",
        "$CONFIG_DIR\settings.json"
    )
    
    foreach ($configFile in $configFiles) {
        if (Test-Path $configFile) {
            Write-Host ""
            Write-Host "Found config file: $configFile" -ForegroundColor Yellow
            
            # Read file content
            $content = Get-Content $configFile -Raw -Encoding UTF8
            
            # Check if contains old API Key
            if ($content -match 'sk-sp-[a-f0-9]{32}') {
                Write-Host "  Old API Key found, updating..." -ForegroundColor Yellow
                
                # Replace API Key
                $content = $content -replace 'sk-sp-[a-f0-9]{32}', $NEW_API_KEY
                
                # Save file
                $content | Out-File -FilePath $configFile -Encoding UTF8 -NoNewline
                
                Write-Host "  API Key updated" -ForegroundColor Green
            } else {
                Write-Host "  No update needed" -ForegroundColor Green
            }
            
            # Check Base URL
            if ($content -match 'coding\.dashscope\.aliyuncs\.com') {
                Write-Host "  Old Base URL found, updating..." -ForegroundColor Yellow
                
                # Replace Base URL
                $content = $content -replace 'https://coding\.dashscope\.aliyuncs\.com/v1', $NEW_BASE_URL
                $content = $content -replace 'https://coding\.dashscope\.aliyuncs\.com/compatible-mode/v1', $NEW_BASE_URL
                
                # Save file
                $content | Out-File -FilePath $configFile -Encoding UTF8 -NoNewline
                
                Write-Host "  Base URL updated" -ForegroundColor Green
            }
        }
    }
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "  Update completed!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "New configuration:" -ForegroundColor Cyan
    Write-Host "  API Key: $NEW_API_KEY" -ForegroundColor White
    Write-Host "  Base URL: $NEW_BASE_URL" -ForegroundColor White
    Write-Host ""
    Write-Host "Please restart Qwen Code to apply new configuration." -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "Config directory does not exist" -ForegroundColor Red
    Write-Host ""
    Write-Host "You may need to run 'qwen' command first to create config files." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
