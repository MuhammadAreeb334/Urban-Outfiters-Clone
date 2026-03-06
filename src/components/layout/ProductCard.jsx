import { Heart } from "lucide-react";
import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col group cursor-pointer min-w-[200px] md:min-w-[280px]">
      <div className="relative overflow-hidden aspect-3/4 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart size={18} strokeWidth={1} />
        </button>
      </div>

      <div className="pt-3 pb-6">
        <h3 className="text-[13px] font-normal text-gray-900 leading-tight mb-1 hover:underline">
          {title}
        </h3>
        <p className="text-[13px] font-bold text-gray-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
