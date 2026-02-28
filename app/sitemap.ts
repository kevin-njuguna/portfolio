import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-kevin-njuguna.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
