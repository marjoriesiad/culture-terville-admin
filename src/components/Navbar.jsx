import Link from "next/link";
import { LuCroissant, LuLogOut } from "react-icons/lu";

export default function Navbar() {
  return (
<div className="navbar bg-base-100 z-10 md:px-10">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Culture Pain <LuCroissant /></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 md:hidden">
        <li>
          <details>
            <summary>Menu</summary>
            <ul className="bg-base-100 rounded-t-none p-2 z-50">
              <li><Link href="/">Clients</Link></li>
              <li><Link href="/produits">Produits</Link></li>
              <li><Link href="/">Ventes</Link></li>
              <li><Link href="/">Chiffres</Link></li>
              <li><Link href="/outils">Outils</Link></li>
              <li><Link href="/"><LuLogOut /></Link></li>
            </ul>
          </details>
        </li>
      </ul>

      <ul className="hidden md:flex gap-4 text-lg items-center">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/">Clients</Link></li>
        <li><Link href="/">Produits</Link></li>
        <li><Link href="/">Ventes</Link></li>
        <li><Link href="/">Outils</Link></li>
        <li><Link href="/"><LuLogOut /></Link></li>
      </ul>
    </div>
  </div>
    
  );
}
