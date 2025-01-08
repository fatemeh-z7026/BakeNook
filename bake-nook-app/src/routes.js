import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/ProductsFolder/Products";
// import Shop from "./pages/Shop";

const routes = [
  { id: 1, label: "Home", path: "/", element: <Home /> },
  { id: 2, label: "About Us", path: "/aboutus", element: <AboutUs /> },
  { id: 3, label: "Contact Us", path: "/contactus", element: <ContactUs /> },
  {
    id: 4,
    label: "Products",
    path: "/products",
    element: <Products />,
    children: [
      { id: 41, label: "Cake", path: "/cake" },
      { id: 42, label: "Bread", path: "/bread" },
      { id: 43, label: "Dessert", path: "/dessert" },
      { id: 44, label: "Cookies", path: "/cookie" },
    ],
  },
];

export default routes;
