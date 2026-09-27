/**
 * Square POS API Client & Configuration
 * Provides unified access to Square Catalog, Locations, and Orders APIs.
 */

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  orderUrl: string;
  mapUrl: string;
}

export const PISTACHIO_LOCATIONS: Record<string, LocationInfo> = {
  "911-whalley-ave": {
    id: "location-whalley",
    name: "Pistachio Cafe (Location 1)",
    address: "911 Whalley Ave, New Haven, CT 06515",
    phone: "(203) 800-4262",
    hours: "Mon – Thu 7:00 AM – 7:30 PM | Fri – Sun 7:00 AM – 9:30 PM",
    orderUrl: "/menu",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=911%20Whalley%20Ave%2C%20New%20Haven%2C%20CT%2006515&query_place_id=ChIJ3WBON5DZ54kRLT0rDMisS9I",
  },
  "1245-chapel-st": {
    id: "location-chapel",
    name: "Pistachio Cafe 2 (Location 2)",
    address: "1245 Chapel St, New Haven, CT 06511",
    phone: "(203) 800-4533",
    hours: "Sun – Thu 8:30 AM – 8:30 PM | Fri – Sat 8:30 AM – 10:30 PM",
    orderUrl: "/menu/1245-chapel-st",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1245%20Chapel%20St%2C%20New%20Haven%2C%20CT%2006511&query_place_id=ChIJBdtHC6nZ54kRkk2pJiWGxeQ",
  },
};

const SQUARE_ENV = process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT || "sandbox";
const SQUARE_BASE_URL =
  SQUARE_ENV === "production"
    ? "https://connect.squareup.com/v2"
    : "https://connect.squareupsandbox.com/v2";

export async function fetchSquareCatalog() {
  const token = process.env.SQUARE_ACCESS_TOKEN;
  if (!token) {
    console.warn("Square Access Token not configured. Using static verified catalog.");
    return null;
  }

  try {
    const res = await fetch(`${SQUARE_BASE_URL}/catalog/list?types=ITEM,CATEGORY`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Square-Version": "2025-04-16",
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      throw new Error(`Square API error: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching Square catalog:", error);
    return null;
  }
}
