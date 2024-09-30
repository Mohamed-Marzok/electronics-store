import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import AddProductModal from "../components/modals/AddProductModal";
import Products from "../components/products/Products";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Products />
      <AddProductModal />
    </div>
  );
}
