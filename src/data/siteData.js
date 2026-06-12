export const siteData = {
  name: "Laguindingan Townhouse",
  tagline: "Your Home Base in Laguindingan — Minutes from the Airport",
  hostName: "Aldwin Lauron",
  rating: 4.93,
  reviewCount: 106,
  guestFavorite: true,
  superhost: true,
  responseRate: "100%",
  responseTime: "within 1 hour",

  nav: {
    links: [
      { label: "Units", to: "unit-selector" },
      { label: "About", to: "about" },
      { label: "Amenities", to: "features" },
      { label: "Gallery", to: "gallery" },
      { label: "Reviews", to: "reviews" },
      { label: "Location", to: "location" },
      { label: "Local Tips", to: "local-tips" },
    ],
  },

  hero: {
    headline: "Your Home Base in Laguindingan",
    subheadline: "Minutes from the Airport",
    description:
      "A 2-storey townhouse with three private units for families and groups — hosted by Superhost Aldwin Lauron with a 4.93 rating across 106 reviews.",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80",
    ctaPrimary: "Choose Your Unit",
    ctaSecondary: "Explore the Property",
  },

  host: {
    name: "Aldwin Lauron",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    since: 2019,
    bio: "Aldwin is a Superhost with 106 reviews and a 4.93 average rating across his listings. He responds to every inquiry within an hour and takes pride in making every guest feel at home in Laguindingan.",
  },

  units: [
    {
      id: "door-1",
      name: "Door 1",
      shortName: "Unit 1",
      airbnbUrl:
        "https://www.airbnb.com/rooms/929227620217637839?guests=1&adults=1&s=67&unique_share_id=51a44def-9841-4f01-b4a3-9ef41b504226",
      badge: "Ground Floor",
      about: {
        headline: "Door 1 — Ground Floor Comfort",
        description:
          "Located on the ground floor for easy access, Door 1 is perfect for families with older members or anyone who prefers single-level living. It offers a spacious layout with direct access to the common areas.",
        stats: [
          { value: "6", label: "Guests Max" },
          { value: "2", label: "Bedrooms" },
          { value: "1", label: "Bathroom" },
        ],
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      },
      features: {
        headline: "Door 1 Amenities",
        items: [
          {
            icon: "Wifi",
            title: "Fast Fiber Wi-Fi",
            description: "Reliable, high-speed internet for work or streaming.",
          },
          {
            icon: "ChefHat",
            title: "Full Kitchen Access",
            description: "Shared kitchen fully equipped with cookware and appliances.",
          },
          {
            icon: "Tv",
            title: 'Smart TV',
            description: "Kick back with Netflix, YouTube, or local channels.",
          },
          {
            icon: "Car",
            title: "Free Parking",
            description: "Secure, private parking right at the property.",
          },
          {
            icon: "Shirt",
            title: "Washing Machine",
            description: "In-unit laundry for longer stays and fresh clothes.",
          },
          {
            icon: "DoorOpen",
            title: "Ground Floor Access",
            description: "No stairs needed — easy entry and exit for all guests.",
          },
        ],
      },
      gallery: {
        headline: "Inside Door 1",
        images: [
          {
            src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
            alt: "Door 1 living room",
          },
          {
            src: "https://images.unsplash.com/photo-1598928506311-c55e85e1a63d?w=1200&q=80",
            alt: "Door 1 bedroom",
          },
          {
            src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
            alt: "Door 1 bathroom",
          },
          {
            src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
            alt: "Door 1 dining area",
          },
          {
            src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
            alt: "Door 1 seating area",
          },
        ],
      },
      reviews: {
        items: [
          {
            name: "Maria",
            location: "Manila, Philippines",
            rating: 5,
            quote:
              "Super convenient for our early morning flight! The ground floor unit was perfect for my parents — no stairs to climb.",
          },
          {
            name: "Elena",
            location: "Davao, Philippines",
            rating: 5,
            quote:
              "Clean, comfortable, and just 5 minutes from the airport. Aldwin made check-in so easy. Will book again!",
          },
        ],
      },
    },
    {
      id: "door-2",
      name: "Door 2",
      shortName: "Unit 2",
      airbnbUrl:
        "https://www.airbnb.com/rooms/1060755269874760815?guests=1&adults=1&s=67&unique_share_id=bf4f4c41-04a7-482a-aecb-6aa99b60e4d1",
      badge: "Upper Floor",
      about: {
        headline: "Door 2 — Upper Floor Retreat",
        description:
          "Situated on the upper floor, Door 2 offers a bright and airy space with a dedicated workspace and a cozy layout ideal for couples, solo travelers, or small families looking for a quiet stay near the airport.",
        stats: [
          { value: "4", label: "Guests Max" },
          { value: "1", label: "Bedroom" },
          { value: "1", label: "Bathroom" },
        ],
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      features: {
        headline: "Door 2 Amenities",
        items: [
          {
            icon: "Wifi",
            title: "Fast Fiber Wi-Fi",
            description: "Reliable, high-speed internet for work or streaming.",
          },
          {
            icon: "Monitor",
            title: "Dedicated Workspace",
            description: "A quiet desk setup for remote workers and digital nomads.",
          },
          {
            icon: "Tv",
            title: 'Smart TV',
            description: "Relax and unwind with your favorite streaming apps.",
          },
          {
            icon: "ChefHat",
            title: "Full Kitchen Access",
            description: "Shared kitchen fully equipped with cookware and appliances.",
          },
          {
            icon: "Car",
            title: "Free Parking",
            description: "Secure, private parking right at the property.",
          },
          {
            icon: "Sun",
            title: "Rooftop Deck Access",
            description: "Enjoy the open-air rooftop for morning coffee or evening hangouts.",
          },
        ],
      },
      gallery: {
        headline: "Inside Door 2",
        images: [
          {
            src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
            alt: "Door 2 living area",
          },
          {
            src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
            alt: "Door 2 bedroom",
          },
          {
            src: "https://images.unsplash.com/photo-1600566753086-6f7289bf17b7?w=1200&q=80",
            alt: "Rooftop deck access",
          },
          {
            src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
            alt: "Door 2 kitchenette",
          },
          {
            src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
            alt: "Door 2 workspace",
          },
        ],
      },
      reviews: {
        items: [
          {
            name: "James",
            location: "Cebu, Philippines",
            rating: 5,
            quote:
              "The dedicated workspace and fast internet were exactly what I needed. Peaceful neighborhood near the airport.",
          },
          {
            name: "Kevin",
            location: "Singapore",
            rating: 5,
            quote:
              "As a remote worker, this was the perfect stopover. Great amenities and a comfortable, clean space.",
          },
        ],
      },
    },
    {
      id: "door-3",
      name: "Door 3",
      shortName: "Unit 3",
      airbnbUrl:
        "https://www.airbnb.com/rooms/1374322181329569137?guests=1&adults=1&s=67&unique_share_id=3df4fd82-e743-44d0-badd-f5ef13ed9cb0",
      badge: "Upper Floor",
      about: {
        headline: "Door 3 — Spacious Upper Floor Unit",
        description:
          "The largest of the three units, Door 3 is designed for families or small groups who need extra space. Located on the upper floor with a generous layout, it's the ideal choice for those staying longer or traveling together.",
        stats: [
          { value: "6", label: "Guests Max" },
          { value: "2", label: "Bedrooms" },
          { value: "1", label: "Bathroom" },
        ],
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      },
      features: {
        headline: "Door 3 Amenities",
        items: [
          {
            icon: "Wifi",
            title: "Fast Fiber Wi-Fi",
            description: "Reliable, high-speed internet for work or streaming.",
          },
          {
            icon: "ChefHat",
            title: "Full Kitchen Access",
            description: "Shared kitchen fully equipped with cookware and appliances.",
          },
          {
            icon: "Tv",
            title: 'Smart TV',
            description: "Kick back with Netflix, YouTube, or local channels.",
          },
          {
            icon: "Car",
            title: "Free Parking",
            description: "Secure, private parking right at the property.",
          },
          {
            icon: "Shirt",
            title: "Washing Machine",
            description: "In-unit laundry for longer stays and fresh clothes.",
          },
          {
            icon: "Sun",
            title: "Rooftop Deck Access",
            description: "Enjoy the open-air rooftop for morning coffee or evening hangouts.",
          },
        ],
      },
      gallery: {
        headline: "Inside Door 3",
        images: [
          {
            src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
            alt: "Door 3 living room",
          },
          {
            src: "https://images.unsplash.com/photo-1598928506311-c55e85e1a63d?w=1200&q=80",
            alt: "Door 3 main bedroom",
          },
          {
            src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
            alt: "Door 3 second bedroom",
          },
          {
            src: "https://images.unsplash.com/photo-1600566753086-6f7289bf17b7?w=1200&q=80",
            alt: "Rooftop deck",
          },
          {
            src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
            alt: "Door 3 kitchen area",
          },
        ],
      },
      reviews: {
        items: [
          {
            name: "Maria",
            location: "Manila, Philippines",
            rating: 5,
            quote:
              "We were a family of 5 and Door 3 gave us all the space we needed. Clean, modern, and so close to the airport!",
          },
          {
            name: "James",
            location: "Cebu, Philippines",
            rating: 5,
            quote:
              "The two bedrooms were perfect for our group. Rooftop access was the highlight — we spent every evening up there.",
          },
        ],
      },
    },
  ],

  location: {
    headline: "Where You'll Be",
    lat: 8.576530818060006,
    lng: 124.44322945230701,
    highlights: [
      {
        icon: "Plane",
        title: "5 Minutes to Airport",
        description: "Laguindingan Airport is just a short drive away — ideal for early or late flights.",
      },
      {
        icon: "TreePine",
        title: "Quiet Neighborhood",
        description: "Located in a peaceful residential area away from the hustle and noise.",
      },
      {
        icon: "MapPin",
        title: "Explore Northern Mindanao",
        description: "A great home base for day trips to Iligan, Cagayan de Oro, and nearby beaches.",
      },
    ],
  },

  localTips: {
    headline: "Local Tips & Recommendations",
    items: [
      {
        icon: "Bus",
        title: "Getting Around",
        description:
          "Tricycles and habal-habal motorcycles are readily available nearby for short trips. For longer journeys, car rentals can be arranged.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Nearby Eats",
        description:
          "Local carenderias serve authentic Mindanaoan dishes just minutes away. Ask Aldwin for his personal favorites upon booking.",
      },
      {
        icon: "ShoppingBag",
        title: "Essentials Nearby",
        description:
          "A local market, pharmacy, and ATM are within a short drive. Stock up on supplies before settling in.",
      },
      {
        icon: "Compass",
        title: "Day Trips Worth Taking",
        description:
          "Visit Tinago Falls in Iligan, the white-water rafting in Cagayan de Oro, or the beaches of Initao — all within driving distance.",
      },
      {
        icon: "Clock",
        title: "Airport Timing",
        description:
          "For early flights, aim to leave 10 minutes before check-in opens. The terminal is small and security moves quickly.",
      },
    ],
  },

  finalCta: {
    headline: "Ready to Book Your Stay?",
    subheadline:
      "Rated 4.93 by 106 guests. Hosted by a Superhost who replies within the hour.",
    button: "Check Availability on Airbnb",
    footnote: "Secure booking via Airbnb. Free cancellation options available.",
  },

  footer: {
    text: "Laguindingan Townhouse — Hosted with care by Aldwin Lauron",
  },
};
