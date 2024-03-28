import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import DetailProduct from "./pages/detail-product";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import ProductManagement from "./pages/admin/product";
import ProductAdd from "./pages/admin/product/add";
import ProductEdit from "./pages/admin/product/edit";
import { Toaster } from "@/components/ui/toaster"
import CategoryDetail from "./pages/CategoryDetail";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="products/:id" element={<DetailProduct />} />
                    <Route path="categories/:id" element={<CategoryDetail />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route path="products"  element={<ProductManagement />}/>
                    <Route path="products/add"  element={<ProductAdd />}/>
                    <Route path="products/:id/edit"  element={<ProductEdit />}/>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
