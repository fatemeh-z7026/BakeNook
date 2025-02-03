
import { ref, set } from "firebase/database";
import { database } from "./firebase-config";
import mainProductData from "../data/productDatas.json";

const saveProductData = () => {
  const productsRef = ref(database, "products/");
  set(productsRef, mainProductData.mainProductData)
    .then(() => console.log("Products saved successfully!"))
    .catch((error) => console.error("Error saving products:", error));
};

saveProductData();
