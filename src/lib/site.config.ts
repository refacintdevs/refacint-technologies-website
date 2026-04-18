/**
 * Central site configuration. Change values here and they propagate everywhere.
 */
export const siteConfig = {
  name: "Refacint Technologies",
  shortName: "Refacint",
  description:
    "We design, develop, deploy, and maintain digital platforms. Software development, AI solutions, and business process automation from Lagos, Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://refacint.com",
  ogImage: "/og-image.png",
  locale: "en_US",
  keywords: [
    "software development",
    "AI solutions",
    "business process automation",
    "web development",
    "mobile app development",
    "Lagos Nigeria software company",
    "custom software",
    "digital transformation",
    "platform engineering",
    "Refacint",
  ],
  author: {
    name: "Refacint Technologies",
    email: "hello@refacint.com",
  },
  organization: {
    legalName: "Refacint Technologies",
    foundingLocation: "Lagos, Nigeria",
    address: {
      locality: "Lagos",
      region: "Lagos",
      country: "NG",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;

