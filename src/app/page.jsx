'use client'
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      {isLoggedIn ? (
        <Navbar />
      ) : (
        <p>Formulaire de connexion</p>
      )}
      
    </>
  );
}
