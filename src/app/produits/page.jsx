import Navbar from "@/components/Navbar";
import ProductListItem from "@/components/ProductListItem";

export default function Produits(){
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-3 mt-8">
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
            </div>
        </>
    )
}