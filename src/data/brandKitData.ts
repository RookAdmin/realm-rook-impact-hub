import { BrandAsset } from "@/types";

export const brandColors = [
  { name: "Primary Black", hex: "#131313", rgb: "19, 19, 19" },
  { name: "Sky White", hex: "#FAF9F6", rgb: "250, 249, 246" },
  { name: "Light Gray", hex: "#F1F1F1", rgb: "241, 241, 241" },
  { name: "Dark Gray", hex: "#222222", rgb: "34, 34, 34" },
  { name: "Gray", hex: "#888888", rgb: "136, 136, 136" },
];

export const typography = [
  {
    name: "Delight",
    usage: "Display, Headings",
    weights: ["400", "500", "600", "700"],
  },
  {
    name: "Inter",
    usage: "Body Text, UI Elements",
    weights: ["300", "400", "500", "600", "700"],
  },
];

export const brandAssets: BrandAsset[] = [
  {
    id: "1",
    name: "Primary Logo",
    description: "Our main logo for use on white backgrounds.",
    fileTypes: ["PNG"],
    downloadUrls: {
      PNG: "/logo-black.png",
    },
    previewUrl: "/logo-black1.png",
  },
  {
    id: "2",
    name: "Secondary Logo",
    description: "Alternative logo for use on dark backgrounds.",
    fileTypes: [ "PNG"],
    downloadUrls: {
      PNG: "/logo-white.png",
    },
    previewUrl: "/logo-white1.png",
  },
  {
    id: "3",
    name: "Monochrome Logo",
    description: "Single color version for limited color applications.",
    fileTypes: ["JPG"],
    downloadUrls: {
      PNG: "/mono-logo.jpg",
    },
    previewUrl: "/mono-logo.jpg",
  }
];

export const brandDosDonts = [
  {
    do: "Use adequate clear space around the logo.",
    dont: "Crowd the logo with other elements.",
  },
  {
    do: "Use the provided color variations only.",
    dont: "Apply custom colors to the logo.",
  },
  {
    do: "Scale the logo proportionally.",
    dont: "Stretch or distort the logo.",
  },
  {
    do: "Use the logo on approved backgrounds.",
    dont: "Place the logo on busy backgrounds.",
  },
  {
    do: "Use the monochrome version when needed.",
    dont: "Create your own logo variations.",
  },
];

export const permissions = [
  "You may use our logo to link to our official website.",
  "You may use our logo in press releases that feature our collaboration or partnership.",
  "You may use our logo in presentations referencing our work or partnership.",
  "You may not use our logo to imply endorsement of products or services we haven't explicitly endorsed.",
  "You may not alter our logo or use it as part of another logo or design.",
]
