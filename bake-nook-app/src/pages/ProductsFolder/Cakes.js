import { useParams } from "react-router-dom";

const Cakes = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  // You can now use `id` to fetch the correct product or display relevant information
  console.log(id);

  return (
    <div>
      <h1>Cakes - Product ID: {id}</h1>
      {/* Render product details based on the ID */}
    </div>
  );
};

export default Cakes;
