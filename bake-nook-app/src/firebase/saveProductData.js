// فایل saveProductData.js
import { ref, set } from "firebase/database"; // باید در ابتدای فایل قرار بگیرد
import { database } from "./firebase-config"; // باید در ابتدای فایل قرار بگیرد
import productData from "../data/productData.json"; // داده‌های استاتیک باید در ابتدای فایل قرار بگیرد

const saveProductData = () => {
  const productsRef = ref(database, "products/"); // محل ذخیره‌سازی در دیتابیس
  set(productsRef, productData)
    .then(() => console.log("Products saved successfully!"))
    .catch((error) => console.error("Error saving products:", error));
};

saveProductData();
