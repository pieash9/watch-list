import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-117px)] max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
