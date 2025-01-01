import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-around items-center space-x-6">
            <Link href="/">Dashboard</Link>
            <Link href="/">Clients</Link>
            <Link href="/">Produits</Link>
            <Link href="/">Commandes</Link>
        </nav>
    )
}