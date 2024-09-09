import Main from "@/Layout/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import SignUp from "./SignUp";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
const key = localStorage.getItem("data");
const data = key ? JSON.parse(key) : null;
const isAllowed = data !== null ? data.jwt : false;
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
              redirctedPath="Authentaction/login"
              isAllowed={isAllowed}
            >
              <Courses />
            </ProtectedRoutes>
          }
        />
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
    </>
  )
);
export default routes;
