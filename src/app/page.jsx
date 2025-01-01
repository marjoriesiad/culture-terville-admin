'use client'
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      {isLoggedIn ? (
        <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <DashboardCard category="Clients" content="95 clients inscrits" />
            <DashboardCard category="Produits" content="46 produits en ligne" />
            <DashboardCard category="Ventes" content="1576 ventes effectuées" />
            <DashboardCard category="€ Total" content="12 589€" />
          </div>
        </div>

        </>
      ) : (
        <p>Formulaire de connexion</p>
      )}
      
    </>
  );
}
