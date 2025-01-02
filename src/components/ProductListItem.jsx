import { MdDelete, MdEdit } from "react-icons/md";

const ProductListItem = () => {
  return (
    <div className='bg-gray-800 flex justify-between items-center h-10 w-[95%] p-2 rounded-lg'>
        <div className='flex gap-4'>
            <p>Nom du produit</p>
            <p>Catégorie</p>
            <p>Quantité</p>
            <p>Prix</p>
        </div>
        <div className='flex gap-2 items-center'>
            <MdEdit />
            <MdDelete />
        </div>
    </div>
  )
}

export default ProductListItem