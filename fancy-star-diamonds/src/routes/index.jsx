import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../section/AboutUs";
import App from "../App";
import Knowledge from "../section/Knowledge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
]);

export default router;
