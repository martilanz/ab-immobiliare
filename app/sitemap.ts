import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arbarellobeatriceimmobiliare.it",
      lastModified: new Date(),
    },
    {
      url: "https://arbarellobeatriceimmobiliare.it/about",
      lastModified: new Date(),
    },
    {
      url: "https://arbarellobeatriceimmobiliare.it/contact",
      lastModified: new Date(),
    },
  ];
}