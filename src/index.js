import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import ErrorPage from "./error-page";
import History from "./routes/history";
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//bootstrap css, wont work without this
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/history",
    element: <History />,
    errorElement: <ErrorPage />
  },
]);

//navbar re-haul, must not reload the browser, scrap the bootstrap navbar needed, rather, restructure it
//call GymBrahNavBar on every component instead, so you can use NavLink inside

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);