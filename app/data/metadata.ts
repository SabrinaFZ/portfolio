import type { Metadata } from "next";
import { buildImageUrl } from "../utils/image";

const METADATA: Metadata = {
  title: "Home | Portfolio",
  description: "Sabrina Fernandez Zambrano portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://sabrinafz.github.io/portfolio/",
    title: "Home | Portfolio",
    description: "Sabrina Fernandez Zambrano portfolio",
    images: [
      {
        url: buildImageUrl("/avatar.png"),
      },
    ],
  },
};

export default METADATA;
