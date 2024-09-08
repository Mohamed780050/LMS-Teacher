import Main from "@/Layout/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}></Route>
    </>
  )
);
export default routes;
