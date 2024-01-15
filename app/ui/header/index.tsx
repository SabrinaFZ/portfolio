import Image from "next/image";
import Arrow from "./arrow";
import NavLinks from "./nav-links";
import Avatar from "./avatar";

export function Header() {
  return (
    <header className="text-center mb-10 h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center items-center flex-col rounded-md p-4">
      <Avatar />
      <h1 className="font-bold">Sabrina Fernández Zambrano</h1>
      <p className="text-lg font-semibold text-neutral-300">
        Computer Engineer | Frontend Developer
      </p>
      <p className="text-lg">📍 Madrid, Spain</p>
      <NavLinks />
      <Arrow />
    </header>
  );
}
