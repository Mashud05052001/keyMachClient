import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-right" duration={1300} />
  </Provider>
);
