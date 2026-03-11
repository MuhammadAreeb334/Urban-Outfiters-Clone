import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { categoryMetadata } from "../data/categoryMetadata.js";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { categoryNames } from "../data/categoryNames.js";
import { products } from "../data/products.js";
import ProductCard from "../components/layout/ProductCard.jsx";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 18;

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const slug = categoryName || "new";
  const pageData = categoryMetadata[slug] || categoryMetadata["new"];

  const filteredProducts = products.filter(
    (product) => product.category === slug,
  );

  return (
    <div className="mx-auto px-12 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-normal tracking-tighter">
            {pageData.title}
          </h1>
          <span className="text-sm text-gray-400">{pageData.count}</span>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sm tracking-wider flex items-end gap-1 hover:text-gray-500"
            >
              Shop by Category{" "}
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md z-50">
                {categoryNames.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/categories/${cat.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-lg mt-4 md:mt-0">
          <span className="text-sm">Sort:</span>
          <select className="border border-gray-300 p-2 outline-none tracking-wider">
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={handlePrev}
              className={`${currentPage === 1 ? "text-gray-200 cursor-default" : "hover:text-gray-400 text-gray-800"}`}
            >
              <ChevronLeft />
            </button>

            <span className="text-gray-500">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              className={`${currentPage === totalPages ? "text-gray-200 cursor-default" : "hover:text-gray-400 text-gray-800"}`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8 text-sm uppercase tracking-wider mb-8">
        {pageData.filters.map((filter) => (
          <button key={filter} className="flex items-end gap-1 hover:underline">
            {filter} {<ChevronDown size={16} />}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {pageData.subCategories.map((sub) => (
          <button
            key={sub}
            className="border border-gray-300 px-6 py-2 text-[11px] uppercase tracking-widest font-normal hover:underline transition-colors cursor-pointer"
          >
            {sub} →
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showSwatches={true}
            showSale={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
