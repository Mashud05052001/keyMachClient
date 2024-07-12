import { routerNavbarItems } from "@/constant/routerNavbarItems";
import { TNavbarItems, TRouteItems } from "@/types/someShortTypes";

export const generateNavbarItems = () => {
  const navbar = routerNavbarItems.reduce((acc: TNavbarItems[], item) => {
    if (item.name && (item.path || item.path === "")) {
      acc.push({
        name: item.name,
        to: `/${item.path}`,
      });
    }
    return acc;
  }, []);

  return navbar;
};

export const generateRouterItems = () => {
  const routes = routerNavbarItems.reduce((acc: TRouteItems[], item) => {
    if (item.element && (item.path || item.path === "")) {
      acc.push({ path: item.path, element: item.element });
    }
    return acc;
  }, []);

  return routes;
};
