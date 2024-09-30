import AddProductBtn from "../products/AddProductBtn";
import Search from "../search/Search";

export default function Header() {
  return (
    <div className="my-3 flex items-center justify-between mx-auto gap-5 container">
      <Search />
      <AddProductBtn />
    </div>
  );
}
