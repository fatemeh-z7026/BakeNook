import { ref, get } from "firebase/database";
import { database } from "./firebase-config";

const fetchProductData = async () => {
  const productsRef = ref(database, "products/"); // مسیر دیتابیس
  try {
    const snapshot = await get(productsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No products found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export { fetchProductData };
