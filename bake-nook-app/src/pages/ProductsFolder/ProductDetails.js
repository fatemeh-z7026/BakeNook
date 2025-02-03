import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { category } = useParams();
  

  return (
    <div>
      <h1>{category} Details</h1>
      <p>Showing details for {category} products.</p>
    </div>
  );
};

export default ProductDetails;
