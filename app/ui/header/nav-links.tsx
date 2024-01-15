import Link from "next/link";
import Image from "next/image";
import NAV_LINKS from "@/app/data/nav-links";
import { buildImageUrl } from "@/app/utils/image";

export default function NavLinks() {
  return (
    <div className="flex justify-center gap-4 mt-4 opacity-60">
      {NAV_LINKS.map((link) => (
        <Link key={link.name} href={link.url} target="_blank">
          <Image src={buildImageUrl(link.imagePath)} width={40} height={40} alt={link.name} />
        </Link>
      ))}
    </div>
  );
}
