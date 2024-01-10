import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className=" min-h-screen items-center justify-center from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br">
      <Navbar />
      <div className="w-full flex justify-center py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
