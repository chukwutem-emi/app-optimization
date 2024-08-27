import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/**if path === / */}
      {/* <Body /> */}
      {/**if path === /about */}
      {/* <About /> */}
      {/**if path === /contact */}
      {/* <Contact /> */}
      {/* now whenever a path is entered, the path will be filled inside the Outlet*/}
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantsMenu />,
      },
    ],
    errorElement:<Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
