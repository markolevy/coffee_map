$params = @{
"message"="All reviews deleted successfully"
}
Invoke-RestMethod -Method 'Delete' -Uri http://localhost:8080/api/Reviews/ -Body ($params|ConvertTo-Json) -ContentType "application/json"