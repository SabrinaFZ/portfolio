import Link from "next/link";

export default function Arrow() {
  return (
    <Link
      href="#content"
      className="absolute bottom-10"
      aria-label="main content"
    >
      <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[16px] border-white cursor-pointer animate-bounce"></div>
    </Link>
  );
}
