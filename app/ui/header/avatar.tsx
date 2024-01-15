import { buildImageUrl } from "@/app/utils/image";
import Image from "next/image";

const AVATAR_PATH = "/avatar.png";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center mb-4">
      <Image
        className="border-slate-600 border-2 rounded-full"
        src={buildImageUrl(AVATAR_PATH)}
        width={200}
        height={200}
        alt="Sabrina Fernández Zambrano"
      />
    </div>
  );
}
