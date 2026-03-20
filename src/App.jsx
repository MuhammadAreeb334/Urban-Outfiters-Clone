import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CategoryPageWrapper from "./components/layout/CategoryPageWrapper";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="categories/:categoryName"
          element={<CategoryPageWrapper />}
        />

        <Route path="sale" element={<CategoryPage />} />

        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />

        <Route path="account/login" element={<div>Sign In Page</div>} />
        <Route path="account/register" element={<div>Sign Up Page</div>} />

        <Route
          path="*"
          element={<div className="p-20 text-center">404 - Page Not Found</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
