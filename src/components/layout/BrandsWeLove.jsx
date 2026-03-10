import React from "react";
import { Link } from "react-router-dom";

const BrandsWeLove = () => {
  const brands = [
    {
      name: "Baggu",
      image:
        "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Nike",
      image:
        "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE5pa2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Out From Under",
      image:
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    },
    {
      name: "UGG",
      image:
        "https://images.unsplash.com/photo-1618615098938-84fc29796e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Standard Cloth",
      image:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fE1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "BDG",
      image:
        "https://images.unsplash.com/photo-1667610491773-f232e3c1393c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudCUyMHBvY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-10 text-gray-800">
        <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight">
          Brands We Love
        </h2>
        <Link
          to="/brands"
          className="text-[11px] font-bold tracking-[0.2em] uppercase underline underline-offset-4 hover:no-underline transition-all"
        >
          Shop All Brands
        </Link>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-6 md:gap-8">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center min-w-[110px] max-w-[150px] md:min-w-[130px] md:max-w-[200px]"
          >
            <div className="w-full aspect-square overflow-hidden mb-4 bg-gray-50">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>

            <Link
              to={`/brands/${brand.name.toLowerCase()}`}
              className="text-[10px] md:text-[11px] font-normal tracking-[0.15em] uppercase underline hover:no-underline text-center whitespace-nowrap"
            >
              Shop {brand.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsWeLove;
