import React from "react";
import { 
  // FaStar, 
  // FaRegStar, 
  FaShoppingCart 
} from "react-icons/fa";
import { Item, } from "../../types/items";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  handleAddItem: (item: Item) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
  image, 
  title, 
  price, 
  handleAddItem, 
}) => {
  const handleClicked = () => {
    handleAddItem({name: title, price, id }); 
  }

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <p className="text-gray-600">${price.toLocaleString("en-US")}.00</p>
        <button 
          className="flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mt-2 transition"
          onClick={handleClicked}
          >
          <FaShoppingCart className="mr-2" /> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
