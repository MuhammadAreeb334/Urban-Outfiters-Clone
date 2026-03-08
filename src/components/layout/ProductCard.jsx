import { Heart } from "lucide-react";

import React from "react";

const ProductCard = ({ image, hoverImage, title, price }) => {
  return (
    <div className="flex flex-col min-w-[250px]">
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 hover:[&>.hover-img]:opacity-100 hover:[&>.main-img]:opacity-0 hover:[&>.heart]:opacity-100 hover:[&>.quick]:opacity-80 hover:[&>.quick]:translate-y-0">
        <img
          src={image}
          alt={title}
          className="main-img w-full h-full object-cover transition-opacity duration-500"
        />

        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${title} alternate`}
            className="hover-img absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
          />
        )}

        <button className="heart absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm opacity-0 hover:text-gray-400 transition-all duration-300 z-10 cursor-pointer">
          <Heart size={18} strokeWidth={1.2} />
        </button>

        <button className="quick absolute bottom-0 left-0 w-full bg-white py-3 text-[11px] font-normal tracking-[0.15em] uppercase opacity-0 translate-y-full transition-all duration-300 z-10 text-gray-400 hover:text-gray-700 cursor-pointer">
          Quick Shop
        </button>
      </div>

      <div className="pt-3 pb-6">
        <h3 className="text-[13px] font-normal text-gray-900 leading-tight mb-1 hover:underline">
          {title}
        </h3>

        <p className="text-[13px] font-normalbold text-gray-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
