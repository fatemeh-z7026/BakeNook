import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";

const routes = [
  { id: 1, label: "Home", path: "/", element: <Home /> },
  { id: 2, label: "About Us", path: "/aboutus", element: <AboutUs /> },
  { id: 3, label: "Contact Us", path: "/contactus", element: <ContactUs /> },
  { id: 4, label: "Products", path: "/products", element: <Products /> },
];

export default routes;
