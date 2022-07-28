$params = @{
"username"="marko"
"email"="marko.levy@epita.fr"
"password"="levy"
}
Invoke-RestMethod -Method 'Post' -Uri http://localhost:8080/api/Users/ -Body ($params|ConvertTo-Json) -ContentType "application/json"