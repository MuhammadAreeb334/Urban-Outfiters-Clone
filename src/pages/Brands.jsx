import React, { useState } from "react"; // 1. Import useState
import Button from "../components/ui/Button";
import { topBrands } from "../data/brands";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Brands = () => {
  const spotlightImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1528712069789-4fb5b7e3255b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZ3V8ZW58MHx8MHx8fDA%3D",
      title: "BAGGU",
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "NIKE",
    },
    {
      id: 3,
      url: "https://plus.unsplash.com/premium_photo-1668127212806-0b69765d50b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGV2aXN8ZW58MHx8MHx8fDA%3D",
      title: "LEVI'S",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? spotlightImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === spotlightImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto px-12 py-8">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-normal tracking-tighter mb-2">Brands</h1>
          <p className="uppercase text-[11px] leading-relaxed tracking-wider text-gray-600">
            New arrivals, exclusive drops and more from a rotating lineup of our
            <br />
            very favorite brands.
          </p>
        </div>
        <button className="hidden md:block bg-[#222] text-white px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
          SHOP ALL BRANDS
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-[50px]">
        <div className="lg:w-1/3">
          <h2 className="text-xl mb-4 text-gray-800 font-medium">
            Brand Spotlight
          </h2>
          <div className="relative group overflow-hidden bg-gray-200 aspect-[3/4]">
            <img
              key={currentIndex}
              src={spotlightImages[currentIndex].url}
              alt={spotlightImages[currentIndex].title}
              className="w-full h-full object-cover animate-in fade-in duration-500"
            />

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 shadow-md hover:bg-white transition-all z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 shadow-md hover:bg-white transition-all z-10"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-0 w-full flex justify-center pb-8">
              <Button variant="white" className="shadow-xl">
                SHOP THE DROP
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-xl mb-4 text-gray-800 font-medium">Top Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
            {topBrands.map((brand, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="mt-3">
                  <span className="text-[11px] font-bold border-b border-black pb-0.5 tracking-widest uppercase">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full mt-12">
            <button className="bg-[#222] text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:underline transition-all">
              SHOP ALL BRANDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
