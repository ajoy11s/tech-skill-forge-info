import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage/ErrorPage.jsx"
import Course from "../Course/Course.jsx";
import CourseImageWithShort from "../CourseImageWithShort/CourseImageWithShort.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import CourseDetails from "../CourseDetails/CourseDetails.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <CourseImageWithShort></CourseImageWithShort>,
        },
        {
          path: "/coursepage",
          element: <Course></Course>,
        },
        {
          path: "/course/:_id",
          element: <CourseDetails></CourseDetails>,
        }
      ]
    },
  ]);

  export default router;