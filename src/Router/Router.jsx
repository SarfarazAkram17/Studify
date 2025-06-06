import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/assignments",
        element: <p>still cooking</p>,
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRouter>
            <p>cooking</p>
          </PrivateRouter>
        ),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRouter>
            <p>cooking</p>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAttemptedAssignments",
        element: (
          <PrivateRouter>
            <p>cooking</p>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
