import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces";

export default function SearchMenu() {
  const navigate = useNavigate();
  const products = useSelector((state: TState) => state.products.products);

  const productClickHandler = (product: IProduct) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-md max-h-96 overflow-auto z-40 dark:bg-gray-900">
      {products.map((product) => (
        <div
          onClick={() => productClickHandler(product)}
          key={product.id}
          className="cursor-pointer flex gap-3 items-center p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 ease-in-out dark:border-gray-700 dark:hover:bg-gray-800"
          role="button"
        >
          <img
            src={product.imageURL}
            alt={product.title}
            className="w-16 h-16 object-cover rounded"
          />
          <p className="text-gray-700 font-medium dark:text-gray-300">
            {product.title}
          </p>
        </div>
      ))}
    </div>
  );
}
