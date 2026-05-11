export const SITE = {
  name: "Edutech Solutions",
  shortName: "Edutech Solutions",
  tagline: "Admission Counselling & Placement Guidance",
  description:
    "Free 1-on-1 admission counselling for Uttarakhand's most respected universities — UPES, Graphic Era, Uttaranchal University, and Dev Bhoomi. Placements up to ₹61.99 LPA.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://edutechsolutions.in").replace(/\/$/, ""),
  locale: "en_IN",
  city: "Dehradun",
  region: "Uttarakhand",
  country: "India",
  phone: "+91 88594 58459",
  whatsapp: "918859458459",
  email: "admissions@edutechsolutions.in",
  address: {
    street: "Rajpur Road",
    locality: "Dehradun",
    region: "Uttarakhand",
    postalCode: "248001",
    country: "IN",
  },
  social: {
    instagram: "https://instagram.com/edutechsolutions",
    facebook: "https://facebook.com/edutechsolutions",
    youtube: "https://youtube.com/@edutechsolutions",
    linkedin: "https://linkedin.com/company/edutechsolutions",
  },
  founded: "2018",
} as const;

export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
} as const;
