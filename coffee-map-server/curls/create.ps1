$params = @{
"username"="marko 2"
"email"="marko.levy2@epita.fr"
"password"="levy2"
}
Invoke-RestMethod -Method 'Post' -Uri http://localhost:8080/api/Users/ -Body ($params|ConvertTo-Json) -ContentType "application/json"