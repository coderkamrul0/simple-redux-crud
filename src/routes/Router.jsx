import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import EditBook from './../pages/EditBook';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllBooks />,
      },
      
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book",
        element: <EditBook />,
      },
    ],
  },
]);
