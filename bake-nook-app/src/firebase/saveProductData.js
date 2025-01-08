
import { ref, set } from "firebase/database"; 
import { database } from "./firebase-config"; 
import productData from "../data/productData.json"; 

const saveProductData = () => {
  const productsRef = ref(database, "products/"); 
  set(productsRef, productData)
    .then(() => console.log("Products saved successfully!"))
    .catch((error) => console.error("Error saving products:", error));
};

saveProductData();
