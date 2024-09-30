import { useDispatch } from "react-redux";
import { TDispatch } from "../../redux/store";
import { openLoginModal, openSignupModal } from "../../redux/uiSlice";
import Button from "../ui/Button";

export default function HeroSection() {
  const dispatch: TDispatch = useDispatch();
  return (
    <div
      className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between p-8"
      style={{ height: "calc(100% - 72px)" }}
    >
      <div className="text-center lg:text-left lg:w-1/2 space-y-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
          Welcome to Radio Commerce
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          Your one-stop platform to buy and sell all things electronic. Whether
          you're a collector or a seller, explore an extensive range of
          electronics, from vintage gadgets to modern tech, and much more.
        </p>
        <div className="mt-6 flex gap-5">
          <Button
            onClick={() => dispatch(openLoginModal())}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            LogIn
          </Button>
          <Button
            onClick={() => dispatch(openSignupModal())}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            SignUp
          </Button>
        </div>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2019/08/10/23/04/casette-4397896_640.png"
          alt="Vintage Radio Cassette"
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain"
        />
      </div>
    </div>
  );
}
