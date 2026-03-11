# Rename folders to English

$renames = @(
    @("00-*", "00-Archive"),
    @("01-*", "01-Model-Configs"),
    @("02-*", "02-Launch-Scripts"),
    @("03-*", "03-Documents"),
    @("04-*", "04-Test-Files"),
    @("05-*", "05-Project-Source"),
    @("06-*", "06-Config-Backups")
)

foreach ($pair in $renames) {
    $pattern = $pair[0]
    $newName = $pair[1]
    
    Get-ChildItem -Directory | Where-Object { $_.Name -like $pattern } | ForEach-Object {
        Rename-Item $_.FullName $newName -ErrorAction SilentlyContinue
        Write-Host "Renamed: $($_.Name) -> $newName" -ForegroundColor Green
    }
}

Write-Host "`nDone!" -ForegroundColor Cyan
