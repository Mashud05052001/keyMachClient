import { generateRouterItems } from "@/utils/generateDynamicRoutesNavbar";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorElement />,
    children: generateRouterItems(),
  },
]);

export default router;
