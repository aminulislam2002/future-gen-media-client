import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
        <NavBar></NavBar>
      <h1>This is main layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
