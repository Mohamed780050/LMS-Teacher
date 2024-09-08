import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import "./app.css";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
