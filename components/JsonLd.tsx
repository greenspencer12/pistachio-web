import React from "react";

export function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CafeOrCoffeeShop",
        "@id": "https://pistachiocafe.com/#location-whalley",
        "name": "Pistachio Cafe - Westville",
        "image": "https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg",
        "url": "https://pistachiocafe.com/911-whalley-ave",
        "telephone": "+1-203-823-9599",
        "priceRange": "$$",
        "servesCuisine": ["Coffee", "Cafe", "Bakery", "Middle Eastern", "Breakfast", "Brunch", "Halal"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "911 Whalley Ave",
          "addressLocality": "New Haven",
          "addressRegion": "CT",
          "postalCode": "06515",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.327379,
          "longitude": -72.960203
        },
        "hasMenu": "https://pistachiocafe.com/menu",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": "https://pistachiocafe.com/#location-chapel",
        "name": "Pistachio Cafe 2 - Downtown New Haven",
        "image": "https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg",
        "url": "https://pistachiocafe.com/1245-chapel-st",
        "telephone": "+1-203-691-6655",
        "priceRange": "$$",
        "servesCuisine": ["Coffee", "Cafe", "Bakery", "Middle Eastern", "Breakfast", "Brunch", "Halal"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1245 Chapel St",
          "addressLocality": "New Haven",
          "addressRegion": "CT",
          "postalCode": "06511",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.309556,
          "longitude": -72.935814
        },
        "hasMenu": "https://pistachiocafe.com/menu/1245-chapel-st",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "21:00"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are you known for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pistachio Cafe is known for our signature pistachio latte, warm Syrian breakfast platters, daily baked fresh baklava, global-inspired brunch, and 100% Halal certified dining."
        }
      },
      {
        "@type": "Question",
        "name": "What meals do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Breakfast, Brunch, Lunch, Coffee, Pastries, and Dinner 7 days a week."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer delivery or takeout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer online ordering for easy takeout and fast local delivery directly from our website."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve in New Haven, CT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve New Haven, Westville, Downtown New Haven, Yale University, West Haven, Whitneyville, Beaver Hills, East Rock, and surrounding Connecticut neighborhoods."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
