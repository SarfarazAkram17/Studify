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
import Lottie from "lottie-react";
import lottieLoading from "../assets/loading.json";

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
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
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
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
        ),
      },
      {
        path: "/giveAssignmentMark/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/submissions/${params.id}`),
        element: (
          <PrivateRouter>
            <GiveAssignmentMark></GiveAssignmentMark>
          </PrivateRouter>
        ),
        hydrateFallbackElement: (
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
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
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
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
          <Lottie
            loop={true}
            animationData={lottieLoading}
            className="h-[40vh] w-auto"
          ></Lottie>
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
