import MainContainer from "@/components/container/MainContainer";
import Navbar from "@/components/share/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  // const noOfCartItems = useAppSelector(
  //   (state: RootState) => state.carts.totalCartItems
  // );
  // TODO : Implemented it before submission
  // useEffect(() => {
  //   const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //     if (noOfCartItems > 0) {
  //       const confirmMessage = "By reloading, cart items may be removed.";
  //       e.returnValue = confirmMessage;
  //       return confirmMessage;
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // });
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
