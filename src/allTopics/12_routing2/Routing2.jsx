import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contacts from "./Contacts";
import Nav from "./Nav";
import Layout from "./Layout";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

const Routing2 = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default Routing2;
