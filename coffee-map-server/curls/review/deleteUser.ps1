$params = @{
"message"="Review deleted successfully"
}
Invoke-RestMethod -Method 'Delete' -Uri http://localhost:8080/api/Reviews/1 -Body ($params|ConvertTo-Json) -ContentType "application/json"