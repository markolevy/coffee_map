﻿Invoke-RestMethod -Method 'Get' -Uri http://localhost:8080/api/Users/2 -Body ($params|ConvertTo-Json) -ContentType "application/json"