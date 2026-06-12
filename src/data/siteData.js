export const siteData = {
  name: "Laguindingan Townhouse",
  tagline: "Your Home Base in Laguindingan — Minutes from the Airport",
  hostName: "Aldwin Lauron",
  totalReviewCount: 106,
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
      "A 2-storey townhouse offering three booking options — each with 3 bedrooms, 3 private baths, and different bed configurations for your group. Hosted by Superhost Aldwin Lauron.",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80",
    ctaPrimary: "Choose Your Setup",
    ctaSecondary: "Explore the Property",
  },

  host: {
    name: "Aldwin Lauron",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    since: 2019,
    bio: "Aldwin is a Superhost with over 100 reviews across his listings. He responds to every inquiry within an hour and takes pride in making every guest feel at home in Laguindingan.",
  },

  units: [
    {
      id: "door-1",
      name: "Door 1",
      shortName: "Unit 1",
      rating: 4.93,
      airbnbUrl:
        "https://www.airbnb.com/rooms/929227620217637839?guests=1&adults=1&s=67&unique_share_id=51a44def-9841-4f01-b4a3-9ef41b504226",
      badge: "3 Beds",
      about: {
        headline: "Door 1 — Standard Setup",
        description:
          "Welcome to Laguindingan Townhouse! This 2-storey townhouse is conveniently located just 5 minutes from the airport. Door 1 is the standard configuration with 3 beds — perfect for families or small groups who want a comfortable and reliable stay close to the terminal.",
        stats: [
          { value: "3", label: "Bedrooms" },
          { value: "3", label: "Beds" },
          { value: "3", label: "Private Baths" },
        ],
        image:
          "https://a0.muscache.com/im/pictures/miso/Hosting-929227620217637839/original/cd56df60-e061-424f-b9f5-b997e774bd21.jpeg?im_w=720",
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
            title: "Full Kitchen",
            description: "Fully equipped with cookware, utensils, and appliances.",
          },
          {
            icon: "Monitor",
            title: "Dedicated Workspace",
            description: "A quiet desk setup for remote workers and digital nomads.",
          },
          {
            icon: "Tv",
            title: '65" Smart TV',
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
              "Super convenient for our early morning flight! The house was spotless and Aldwin was incredibly responsive. Highly recommend for families.",
          },
          {
            name: "Elena",
            location: "Davao, Philippines",
            rating: 5,
            quote:
              "Just 5 minutes from the airport. Clean, comfortable, and Aldwin made check-in so easy. Will book again!",
          },
        ],
      },
    },
    {
      id: "door-2",
      name: "Door 2",
      shortName: "Unit 2",
      rating: 4.95,
      airbnbUrl:
        "https://www.airbnb.com/rooms/1060755269874760815?guests=1&adults=1&s=67&unique_share_id=bf4f4c41-04a7-482a-aecb-6aa99b60e4d1",
      badge: "6 Beds",
      about: {
        headline: "Door 2 — Max Capacity Setup",
        description:
          "This 2-storey townhouse configuration comes with 6 beds — ideal for larger groups who need maximum sleeping space. Conveniently located just 6 minutes from the airport with a spacious living room, dining area, and all the essentials for a comfortable group stay.",
        stats: [
          { value: "3", label: "Bedrooms" },
          { value: "6", label: "Beds" },
          { value: "3", label: "Private Baths" },
        ],
        image:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1060755269874760815/original/d8b6da7c-f2c9-4f4b-a47f-2aae9d883c4b.jpeg?im_w=720",
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
            icon: "ChefHat",
            title: "Full Kitchen",
            description: "Fully equipped with cookware, utensils, and appliances.",
          },
          {
            icon: "Monitor",
            title: "Dedicated Workspace",
            description: "A quiet desk setup for remote workers and digital nomads.",
          },
          {
            icon: "Tv",
            title: '65" Smart TV',
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
              "We were a group of 8 and had plenty of space. The rooftop deck was our favorite spot. Wi-Fi was fast and reliable throughout our stay.",
          },
          {
            name: "Kevin",
            location: "Singapore",
            rating: 5,
            quote:
              "The dedicated workspace and fast internet were exactly what I needed. Peaceful neighborhood and great amenities near the airport.",
          },
        ],
      },
    },
    {
      id: "door-3",
      name: "Door 3",
      shortName: "Unit 3",
      rating: 4.9,
      airbnbUrl:
        "https://www.airbnb.com/rooms/1374322181329569137?source_impression_id=p3_1781284139_P3Dg3PZr_vkJ-OeU",
      badge: "4 Beds",
      about: {
        headline: "Door 3 — Premium Setup",
        description:
          "This spacious home features three air-conditioned bedrooms including a master suite with a private balcony. Enjoy a large living room, modern amenities, and 4 beds — ideal for families or groups who want a little extra comfort and style during their stay near Laguindingan Airport.",
        stats: [
          { value: "3", label: "Bedrooms" },
          { value: "4", label: "Beds" },
          { value: "3", label: "Private Baths" },
        ],
        image:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1374322181329569137/original/058c73e0-8993-4e7d-8e45-6bc1f4cb27d9.jpeg?im_w=720",
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
            title: "Full Kitchen",
            description: "Fully equipped with cookware, utensils, and appliances.",
          },
          {
            icon: "Monitor",
            title: "Dedicated Workspace",
            description: "A quiet desk setup for remote workers and digital nomads.",
          },
          {
            icon: "Tv",
            title: '65" Smart TV',
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
              "The air-conditioned master suite with private balcony was incredible. Clean, modern, and so close to the airport!",
          },
          {
            name: "James",
            location: "Cebu, Philippines",
            rating: 5,
            quote:
              "The extra bed setup was perfect for our family. Rooftop access was the highlight — we spent every evening up there.",
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
