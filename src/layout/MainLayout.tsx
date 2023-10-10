import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <div className="dark:text-white">
      <Header />
      <div className="min-h-[calc(100vh-116px)] max-w-7xl mx-auto md:px-0 px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
