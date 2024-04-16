import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../section/AboutUs";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

export default router;
