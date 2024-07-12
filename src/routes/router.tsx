import MainLayout from "../layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "@/components/ErrorElement/ErrorElement";
import { generateRouterItems } from "@/utils/generateDynamicRoutesNavbar";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: generateRouterItems(),
  },
]);

export default router;
