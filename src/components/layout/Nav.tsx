import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import UserAvatar from "./UserAvatar";
import { TState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Nav() {
  const token = useSelector((state: TState) => state.user.token);
  const navigate = useNavigate();
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-700 dark:text-white hover:text-blue-300";
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div
        className="flex items-center"
        role="button"
        onClick={() => navigate("/home")}
      >
        <img
          className="w-14 mr-2"
          src="https://cdn.pixabay.com/photo/2022/10/31/21/57/radio-7560798_1280.png"
          alt="Logo"
        />
        <p className="text-xl font-bold text-gray-800 dark:text-white">Radio</p>
      </div>

      {token && (
        <ul className="flex space-x-4 ml-4 md:ml-8">
          <li>
            <NavLink to="/home" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" className={getLinkClass}>
              Chat
            </NavLink>
          </li>
        </ul>
      )}

      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        {token && <UserAvatar />}
      </div>
    </nav>
  );
}
