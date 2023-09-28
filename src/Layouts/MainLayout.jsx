import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/Navbar";
import MainFooter from "../Pages/Shared/MainFooter/MainFooter";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  );
};

export default MainLayout;
