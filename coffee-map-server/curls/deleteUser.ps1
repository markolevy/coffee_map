$params = @{
"message"="User deleted successfully"
}
Invoke-RestMethod -Method 'Delete' -Uri http://localhost:8080/api/Users/2 -Body ($params|ConvertTo-Json) -ContentType "application/json"