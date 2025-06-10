const tourData = [
  {
    id: 1,
    title: "Yash Water World Tickets",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Wild-Wadi-Waterpark-Tickets.webp",
    available: "Today Available",
    prodTags: ["Mobile Ticket", "Instant Confirmation"],
    rating: 3.5,
    ratCount: 231,
    salePrice: 50,
    marPrice: 75,
    offer: 5,
    city: "Dubai",
    country: "UAE",
    slug: "yash-water-world-tickets",
    availDate: [
      "28-05-2025",
      "29-05-2025",
      "30-05-2025",
      "31-05-2025",
      "01-06-2025",
      "02-05-2025",
    ],
    adventure: {
      adventureId: [1, 2],
    },
    prodCategory: {
      catId: 1,
      catName: "Travel",
    },
    sortBy: 1,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
      {
        otherId: 2,
        otherName: "Official Reseller",
      },
    ],
  },
  {
    id: 2,
    title: "Desert Safari Adventure",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/cities/city_imgdubai.webp",
    available: "Available Tomorrow",
    prodTags: ["E-Ticket", "Pickup Included"],
    rating: 4.8,
    ratCount: 412,
    salePrice: 110,
    marPrice: 150,
    offer: 0,
    city: "Sharjah",
    country: "UAE",
    slug: "desert-safari-adventure",
    availDate: ["30-05-2025", "01-06-2025"],
    adventure: {
      adventureId: [1, 2, 3],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
    ],
  },
  {
    id: 3,
    title: "Burj Khalifa Entry Tickets",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Ferrari-World-Abu-Dhabi.webp",
    available: "Available Today",
    prodTags: ["Mobile Ticket", "Skip the Line"],
    rating: 4.9,
    ratCount: 1200,
    salePrice: 80,
    marPrice: 99,
    offer: 0,
    city: "Abu Dhabi",
    country: "UAE",
    slug: "burj-khalifa-entry-tickets",
    availDate: ["30-05-2025"],
    adventure: {
      adventureId: [5, 6, 8],
    },
    prodCategory: {
      catId: 1,
      catName: "Travel",
    },
    sortBy: 1,
    others: [
      {
        otherId: 2,
        otherName: "Official Reseller",
      },
    ],
  },
  {
    id: 4,
    title: "Dubai Marina Dinner Cruise",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Pearls-Kingdom-Waterpark.webp",
    available: "Available Tonight",
    prodTags: ["Instant Confirmation", "Dinner Included"],
    rating: 4.7,
    ratCount: 678,
    salePrice: 65,
    marPrice: 90,
    offer: 25,
    city: "Melbourne",
    country: "Australia",
    slug: "dubai-marina-dinner-cruise",
    availDate: [
      "28-05-2025",
      "29-05-2025",
      "30-05-2025",
      "31-05-2025",
      "01-06-2025",
      "02-05-2025",
    ],
    adventure: {
      adventureId: [9, 10, 12],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
      {
        otherId: 2,
        otherName: "Official Reseller",
      },
    ],
  },
  {
    id: 5,
    title: "Dubai Safari Park",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Safari-Park.webp",
    available: "Available Tonight",
    prodTags: ["Dinner Included"],
    rating: 4.5,
    ratCount: 678,
    salePrice: 105,
    marPrice: 150,
    offer: 0,
    city: "Singapore",
    country: "Singapore",
    slug: "dubai-safari-park",
    availDate: ["01-06-205", "03-06-205", "05-06-2025"],
    adventure: {
      adventureId: [3, 5, 7],
    },
    prodCategory: {
      catId: 1,
      catName: "Travel",
    },
    sortBy: 4,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
      {
        otherId: 2,
        otherName: "Official Reseller",
      },
    ],
  },
  {
    id: 6,
    title: "Dubai Dolphinarium",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Dolphinarium.webp",
    available: "Available Tonight",
    prodTags: ["Instant Confirmation"],
    rating: 3,
    ratCount: 678,
    salePrice: 75,
    marPrice: 100,
    offer: 0,
    city: "New York",
    country: "USA",
    slug: "dubai-marina-dinner-cruise",
    availDate: ["01-06-205", "03-06-205", "05-06-2025"],
    adventure: {
      adventureId: [5, 10, 12],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
      {
        otherId: 2,
        otherName: "Official Reseller",
      },
    ],
  },
  {
    id: 7,
    title: "Hot Air Baloon Ride",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Hot-Air-Balloon-Ride.webp",
    available: "Available Tomorrow",
    prodTags: ["E-Ticket", "Pickup Included"],
    rating: 4.8,
    ratCount: 412,
    salePrice: 250,
    marPrice: 150,
    offer: 0,
    city: "Singapore",
    country: "Singapore",
    slug: "hot-air-baloon-ride",
    availDate: ["30-05-2025", "01-06-2025"],
    adventure: {
      adventureId: [1, 2, 3],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
    ],
  },
  {
    id: 8,
    title: "Legoland Dubai",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Legoland-Dubai.webp",
    available: "Available Tomorrow",
    prodTags: ["E-Ticket", "Pickup Included"],
    rating: 4.8,
    ratCount: 412,
    salePrice: 200,
    marPrice: 150,
    offer: 0,
    city: "Sharjah",
    country: "UAE",
    slug: "legoland-dubai",
    availDate: ["30-05-2025", "01-06-2025"],
    adventure: {
      adventureId: [1, 2, 3],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
    ],
  },
  {
    id: 9,
    title: "Dubai Aquarium Underwater Zoo with Miracle Garden",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Aquarium-Underwater-Zoo-with-Miracle-Garden.webp",
    available: "Available Tomorrow",
    prodTags: ["E-Ticket", "Pickup Included"],
    rating: 4.8,
    ratCount: 412,
    salePrice: 130,
    marPrice: 150,
    offer: 0,
    city: "Sharjah",
    country: "UAE",
    slug: "dubai-quarium-underwater-zoo-with-miracle-garden",
    availDate: ["30-05-2025", "01-06-2025"],
    adventure: {
      adventureId: [1, 2, 3],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
    ],
  },
  {
    id: 10,
    title: "Dubai Wonder Bus Tour",
    image:
      "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Wonder-Bus-Tour.webp",
    available: "Available Tomorrow",
    prodTags: ["E-Ticket", "Pickup Included"],
    rating: 4.8,
    ratCount: 412,
    salePrice: 150,
    marPrice: 150,
    offer: 0,
    city: "Dubai",
    country: "UAE",
    slug: "dubai-wonder-bus-tour",
    availDate: ["30-05-2025", "01-06-2025"],
    adventure: {
      adventureId: [1, 2, 3],
    },
    prodCategory: {
      catId: 2,
      catName: "Tour",
    },
    sortBy: 2,
    others: [
      {
        otherId: 1,
        otherName: "Mobile Tickets",
      },
    ],
  },
];
export default tourData;
