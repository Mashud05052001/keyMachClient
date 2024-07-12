import MainContainer from "@/components/container/MainContainer";
import Navbar from "@/components/share/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
