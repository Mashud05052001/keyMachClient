const routerNavbarItems = [
  { name: "Home", path: "", element: "<Home />" },
  { name: "Products", path: "products", element: "<Products />" },
  { path: "products/:id", element: "<SingleProduct />" },
  { name: "About Us", path: "aboutUs", element: "<About />" },
  { name: "Contact Us", path: "contactUs", element: "<ContactUs />" },
  { name: "Dashboard", path: "dashboard", element: "<Dashboard />" },
];

// type TRoutes = {
//   path: string;
//   element: string;
// };
// type TNavbar = {
//   to: string;
//   name: string;
// };
const routes = routerNavbarItems.reduce((acc, item) => {
  if (item.element && (item.path || item.path === "")) {
    acc.push({ path: item.path, element: item.element });
  }
  return acc;
}, []);

const navbar = routerNavbarItems.reduce((acc, item) => {
  if (item.name && (item.path || item.path === "")) {
    acc.push({
      name: item.name,
      to: `/${item.path}`,
    });
  }
  return acc;
}, []);

console.log(routes, navbar);
