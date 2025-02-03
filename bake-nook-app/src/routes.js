import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/ProductsFolder/Products";
import ProductDetails from "./pages/ProductsFolder/ProductDetails";

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
      // {
      //   id: 41,
      //   label: "Cakes",
      //   path: "/products/cakes", // this matches /products/:category
      //   element: <ProductDetails category = "cake"/>,
      // },
      // {
      //   id: 42,
      //   label: "Breads",
      //   path: "/products/breads",
      //   element: <ProductDetails category = "bread"/>,
      // },
      // {
      //   id: 43,
      //   label: "Desserts",
      //   path: "/products/desserts",
      //   element: <ProductDetails category = "dessert" />,
      // },
      // {
      //   id: 44,
      //   label: "Cookies",
      //   path: "/products/cookies",
      //   element: <ProductDetails category = "cookie" />,
      // },
      
      {
        id: 41,
        label: "Cakes",
        path: "/products/:category", // Update this path to use dynamic category param
        element: <ProductDetails />,
      },
      {
        id: 42,
        label: "Breads",
        path: "/products/:category",
        element: <ProductDetails />,
      },
      {
        id: 43,
        label: "Desserts",
        path: "/products/:category",
        element: <ProductDetails />,
      },
      {
        id: 44,
        label: "Cookies",
        path: "/products/:category",
        element: <ProductDetails />,
      },
    ],
  },
];

export default routes;
