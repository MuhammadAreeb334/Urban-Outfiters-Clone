import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../../pages/CategoryPage";
import BrandsPage from "../../pages/Brands";

const CategoryPageWrapper = () => {
  const { categoryName } = useParams();

  if (categoryName === "brands") return <BrandsPage />;
  // if (categoryName === "music") return <MusicPage />;
  // if (categoryName === "gifts") return <GiftPage />;
  // if (categoryName === "vintage-remade") return <VintageRemadePage />;

  return <CategoryPage />;
};

export default CategoryPageWrapper;
