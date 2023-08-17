import React, { useEffect } from "react";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import MainConatiner from "./components/MainConatiner";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const commonRoutes = [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <MainConatiner />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ];
  const routes = [...commonRoutes];
  return (
    <>
      <Routes>
        {routes?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children?.map((child, index) => (
                <Route key={index} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
