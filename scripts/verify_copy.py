headlines = [
    "Pistachio Cafe | New Haven",
    "Pistachio Cafe & Bakery",
    "911 Whalley & 1245 Chapel",
    "Fresh Artisan Sandwiches",
    "Organic Salads & Bowls",
    "Artisan Breakfast & Brunch",
    "Best Sandwiches In New Haven",
    "Fresh Gourmet Breakfast",
    "100% Halal Breakfast Menu",
    "Halal Sandwiches & Salads",
    "Authentic Syrian Coffee",
    "Signature Pistachio Latte",
    "Order Online For Pickup",
    "Skip The Wait - Order Ahead",
    "Dine-In, Takeout & Delivery"
]

descriptions = [
    "Fresh artisan sandwiches, organic salads & savory breakfast in New Haven. 100% Halal menu.",
    "Gourmet panini, fresh salads & authentic Syrian coffee in New Haven. Order online today!",
    "Visit Whalley Ave or Chapel St for artisan breakfast, fresh salads & signature lattes.",
    "100% Halal breakfast & lunch favorites, artisan pastries & specialty coffee. Order ahead!"
]

print("=== HEADLINES CHECK (max 30) ===")
for i, h in enumerate(headlines, 1):
    print(f"#{i:2d} ({len(h):2d} chars): \"{h}\"")
    assert len(h) <= 30, f"Headline #{i} exceeds 30 chars!"

print("\n=== DESCRIPTIONS CHECK (max 90) ===")
for j, d in enumerate(descriptions, 1):
    print(f"#{j:2d} ({len(d):2d} chars): \"{d}\"")
    assert len(d) <= 90, f"Description #{j} exceeds 90 chars!"

print("\nALL 15 HEADLINES AND 4 DESCRIPTIONS PASS 100% WITH ZERO ERRORS!")
