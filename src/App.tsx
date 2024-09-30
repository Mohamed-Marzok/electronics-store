import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import ProductById from "./pages/ProductById";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/product/:id" element={<ProductById />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}
export default App;
