import LoginForm from "../components/authentication/LoginForm";
import SignupForm from "../components/authentication/SignupForm";
import HeroSection from "../components/layout/HeroSection";
import Nav from "../components/layout/Nav";

export default function Main() {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">
      <Nav />
      <HeroSection />
      <LoginForm />
      <SignupForm />
    </div>
  );
}
