import Link from "next/link";
import { LuCroissant, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <div className="">
        <p className="md:flex items-center gap-1 uppercase text-lg font-bold hidden">
          Culture Terville
        </p>
        <p className="flex items-center md:hidden text-xl gap-1"><LuCroissant/> CT</p>
      </div>
      <nav className="flex gap-4 text-lg items-center">
        <Link href="/">Accueil</Link>
        <Link href="/">Clients</Link>
        <Link href="/">Produits</Link>
        <Link href="/">Ventes</Link>
        <Link href="/">Outils</Link>
        <Link href="/"><LuLogOut /></Link>
      </nav>
    </div>
    
  );
}
