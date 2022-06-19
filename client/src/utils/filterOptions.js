export const filterOptions = [
  {
    name: "purpose",
    placeholder: "--Purpose--",
    default: "for-rent",
    options: ["for-sale", "for-rent"],
  },
  {
    name: "rentFrequency",
    default: "yearly",
    placeholder: "--Rent Frequency--",
    options: ["daily", "weekly", "monthly", "yearly"],
  },
  {
    name: "priceMin",
    placeholder: "--Min Price(AED)--",
    default: 0,
    options: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 100000],
  },
  {
    name: "priceMax",
    placeholder: "--Max Price(AED)--",
    default: 1000000,
    options: [70000, 100000, 300000, 500000, 700000, 800000, 900000, 1000000],
  },
  {
    name: "areaMin",
    placeholder: "--Min Area (ft2)--",
    default: 0,
    options: [300, 400, 500, 600, 700, 800, 1000],
  },
  {
    name: "roomsMin",
    placeholder: "--Min Rooms--",
    default: 0,
    options: [2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: "bathsMin",
    placeholder: "--Min Baths",
    default: 0,
    options: [2, 3, 4, 5, 6, 7, 8],
  },
];
