import Main from "@/Layout/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import CreateACourse from "./Pages/CreateACourse";
import Notfound from "@/components/Notfound";
import EditeCourse from "./Pages/EditeCourse";
import EditChapter from "./Pages/EditChapter";
const data = document.cookie.split(";").find((value) => value.includes("jwt"))
  ? document.cookie.split(";").find((value) => value.includes("jwt"))
  : null;
const isAllowed = data !== null ? true : false;
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route
          index
          element={
            <ProtectedRoutes
              redirctedPath="Authentaction/login"
              isAllowed={isAllowed}
            >
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="mycourses"
          element={
            <ProtectedRoutes
              redirctedPath="/Authentaction/login"
              isAllowed={isAllowed}
            >
              <Outlet />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Courses />}/>
          <Route path="createACourse" element={<CreateACourse />} />
          <Route path="editeCourse/:id" element={<EditeCourse />} />
          <Route path="editeChapter/:id" element={<EditChapter />} />
        </Route>
      </Route>
      <Route path="Authentaction">
        <Route
          path="signup"
          element={
            <ProtectedRoutes redirctedPath="/" isAllowed={!isAllowed}>
              <SignUp />
            </ProtectedRoutes>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoutes redirctedPath="/" isAllowed={!isAllowed}>
              <Login />
            </ProtectedRoutes>
          }
        />
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);
export default routes;
