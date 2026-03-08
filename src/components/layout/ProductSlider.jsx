import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ProductSlider = ({ title, products }) => {
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const slider = sliderRef.current;

    const atStart = slider.scrollLeft <= 0;
    const atEnd =
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  };

  const scrollRight = () => {
    if (!canScrollRight) return;

    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    if (!canScrollLeft) return;

    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState);

    return () => slider.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <section className="px-4 md:px-16 py-12 relative">
      <div className="mb-6">
        <h2 className="text-[18px] text-gray-800 mb-3">{title}</h2>
        <div className="h-[1px] bg-gray-300"></div>
      </div>

      <button
        onClick={scrollLeft}
        className={`hidden lg:flex items-center justify-center z-20 absolute left-1 md:left-16 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 
        ${canScrollLeft ? "cursor-pointer text-black" : "cursor-default text-gray-300"}`}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollRight}
        className={`hidden lg:flex items-center justify-center z-20 absolute right-2 md:right-16 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 
        ${canScrollRight ? "cursor-pointer text-black" : "cursor-default text-gray-300"}`}
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.images.main}
            hoverImage={product.images.hover}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
