import Nav from "../components/layout/Nav";
import Products from "../components/products/Products";
import UserInfo from "../components/profile/UserInfo";

export default function Profile() {
  return (
    <div>
      <Nav />
      <UserInfo />
      <Products />
    </div>
  );
}
