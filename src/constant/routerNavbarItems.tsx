import Home from "@/pages/home/Home";
import Products from "@/pages/products/Products";
import ContactUs from "@/pages/contactUs/ContactUs";
import Dashboard from "@/pages/dashboard/Dashboard";
import SingleProduct from "@/pages/products/SingleProduct";
import Cart from "@/pages/cart/Cart";
import CheckOut from "@/pages/checkout/CheckOut";
import SuccessfullOrder from "@/pages/successfullOrder/SuccessfullOrder";
import AboutPage from "@/pages/about/AboutPage";

export const routerNavbarItems = [
  { name: "Home", path: "", element: <Home /> },
  { name: "Products", path: "products", element: <Products /> },
  { name: "About Us", path: "aboutUs", element: <AboutPage /> },
  { name: "Contact Us", path: "contactUs", element: <ContactUs /> },
  { name: "Dashboard", path: "dashboard", element: <Dashboard /> },
  { path: "products/:id", element: <SingleProduct /> },
  { path: "cart", element: <Cart /> },
  { path: "checkout", element: <CheckOut /> },
  { path: "orderComplete", element: <SuccessfullOrder /> },
];
