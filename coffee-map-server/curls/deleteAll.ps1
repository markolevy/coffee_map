$params = @{
"message"="All users deleted successfully"
}
Invoke-RestMethod -Method 'Delete' -Uri http://localhost:8080/api/Users/ -Body ($params|ConvertTo-Json) -ContentType "application/json"