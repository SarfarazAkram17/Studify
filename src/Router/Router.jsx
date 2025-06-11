import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignment from "../Pages/UpdateAssingment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import MyAttemptedAssignments from "../Pages/MyAttemptedAssignments/MyAttemptedAssignments";
import PendingAssingments from "../Pages/PendingAssignments/PendingAssignments";
import GiveAssignmentMark from "../Pages/GiveAssignmentMark/GiveAssignmentMark";

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
        loader: () => fetch("http://localhost:3000/assignments"),
        Component: Assignments,
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/pendingAssignments",
        loader: () => fetch("http://localhost:3000/submissions?status=pending"),
        element: (
          <PrivateRouter>
            <PendingAssingments></PendingAssingments>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/giveAssignmentMark/:id",
        loader: ({params})=>fetch(`http://localhost:3000/submissions/${params.id}`),
        element: (
          <PrivateRouter>
            <GiveAssignmentMark></GiveAssignmentMark>
          </PrivateRouter>
        ),
                hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRouter>
            <CreateAssignment></CreateAssignment>
          </PrivateRouter>
        ),
      },
      {
        path: "/assignmentDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
        element: (
          <PrivateRouter>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/updateAssignment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
        element: (
          <PrivateRouter>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/myAttemptedAssignments",
        element: (
          <PrivateRouter>
            <MyAttemptedAssignments></MyAttemptedAssignments>
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
