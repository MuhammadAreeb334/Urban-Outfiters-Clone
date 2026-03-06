import ProductCard from "./ProductCard";

const ProductSlider = ({ title, products }) => {
  return (
    <section className="px-4 md:px-16 py-12 relative group">
      <div className="mb-6">
        <h2 className="text-[18px] font-normal text-gray-800 mb-3">{title}</h2>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4">
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
