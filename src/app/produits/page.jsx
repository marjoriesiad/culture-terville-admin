import Navbar from "@/components/Navbar";
import ProductListItem from "@/components/ProductListItem";

export default function Produits() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-3">
        <div className="bg-green-900 flex justify-center items-center h-10 w-[95%] p-2 rounded-lg font-bold">
          Ajouter un produit
        </div>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </>
  );
}
