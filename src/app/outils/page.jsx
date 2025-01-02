import DashboardCard from "@/components/DashboardCard";
import Navbar from "@/components/Navbar";

export default function Outils() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <DashboardCard
            category="Facturation"
            content="Editer une facture"
            link="/facturation"
          />
        </div>
      </div>
    </>
  );
}
