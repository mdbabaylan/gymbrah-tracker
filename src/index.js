import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import ErrorPage from "./error-page";
import History from "./routes/history";
import App from './App';
import GymBrahNavBar from './Gymbrahnavbar';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GymBrahNavBar> {/* all layouts will display navbar, re-usability basics */}
        <RouterProvider router={router} />
    </GymBrahNavBar>
  </React.StrictMode>
);