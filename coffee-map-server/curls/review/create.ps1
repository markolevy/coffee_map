$params = @{
    "username"       = "marko"
    "price_rating"   = "4"
    "drink_rating"   = "4"
    "dessert_rating" = "4"
    "mood_rating"    = "4"
    "global_rating"  = "4"
    "comment"        = "Tihs is comment"
    "coffee_name"    = "Coffee 1"
    "coffee_address" = "1 rue de la paix"
}
Invoke-RestMethod -Method 'Post' -Uri http://localhost:8080/api/Reviews/ -Body ($params | ConvertTo-Json) -ContentType "application/json"