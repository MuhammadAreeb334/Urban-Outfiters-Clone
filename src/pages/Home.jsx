import React from "react";
import QuickLinks from "../components/layout/QuickLinks";
import HeroSection from "../components/layout/HeroSection";
import HeroGrid from "../components/layout/HeroGrid";
import ProductSlider from "../components/layout/ProductSlider";
import { newArrival, topPick, womenTops } from "../data/categories";
import BrandsWeLove from "../components/layout/BrandsWeLove";
import SplitBanner from "../components/layout/SplitBanner";

const Home = () => {
  return (
    <div>
      <QuickLinks />
      <HeroSection />
      <HeroGrid />
      <ProductSlider title="Women's Going Out Tops" products={womenTops} />
      <ProductSlider title="Top Pick For You" products={topPick} />
      <BrandsWeLove />
      <SplitBanner />
      <ProductSlider title="New Arrivals" products={newArrival} />
    </div>
  );
};

export default Home;
