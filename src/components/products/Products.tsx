import { useLocation, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { motion } from "framer-motion";

export default function Products() {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: TState) => state.products.products);
  const profile = useSelector((state: TState) => state.profile.profile);
  const pathname = useLocation().pathname;

  const isProfilePage = pathname.startsWith(`/profile/`) && id;

  const displayedProducts = isProfilePage ? profile.products : products;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const productAnimation = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayedProducts.map((product) => (
        <motion.div
          key={product.id}
          variants={productAnimation}
          whileHover={{
            scale: 1.02,
            y: -10,
            rotateX: 5,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
