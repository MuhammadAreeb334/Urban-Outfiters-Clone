import React from "react";
import QuickLinks from "../components/layout/QuickLinks";
import HeroSection from "../components/layout/HeroSection";
import HeroGrid from "../components/layout/HeroGrid";
import ProductSlider from "../components/layout/ProductSlider";
import { womenTops } from "../data/categories";

const Home = () => {
  return (
    <div>
      <QuickLinks />
      <HeroSection />
      <HeroGrid />
      <ProductSlider title="Women's Going Out Tops" products={womenTops} />
    </div>
  );
};

export default Home;
