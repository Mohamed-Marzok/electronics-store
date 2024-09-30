import { useSelector } from "react-redux";
import { TState } from "../../redux/store";

export default function UserInfo() {
  const profile = useSelector((state: TState) => state.profile.profile);
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {profile.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{profile.email}</p>
      </div>
    </div>
  );
}
