$params = @{
    "username"       = "marko2"
    "price_rating"   = "4"
    "drink_rating"   = "4"
    "dessert_rating" = "4"
    "mood_rating"    = "4"
    "global_rating"  = "4"
    "comment"        = "Tihs is comment"
    "coffee_name"    = "Coffee 2"
    "coffee_address" = "2 rue de la paix"
}
Invoke-RestMethod -Method 'Post' -Uri http://localhost:8080/api/Reviews/ -Body ($params | ConvertTo-Json) -ContentType "application/json"