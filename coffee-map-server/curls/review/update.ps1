$params = @{
"comment"="commentUpdated"
}
Invoke-RestMethod -Method 'Put' -Uri http://localhost:8080/api/Reviews/2 -Body ($params|ConvertTo-Json) -ContentType "application/json"