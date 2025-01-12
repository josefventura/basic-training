import React from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, rating }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-400" />);
    }
    return stars;
  };

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">${price.toLocaleString("en-US")}.00</p>
        <div className="flex items-center space-x-1 my-2">{renderStars()}</div>
        <button className="flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mt-2 transition">
          <FaShoppingCart className="mr-2" /> Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
