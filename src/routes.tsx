import { createBrowserRouter } from "react-router-dom";
// import  { Home } from "./components/home";

import Home from "./components/home";
import { Sidebar } from "./components/sidebar";
import { Error } from "./components/home/Error";
// import Login from "./pages/login";
// import Error from "./pages/error";
// import Movie from "./pages/movie";
// import TvSeries from "./pages/tv-series";
// import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <Error />,
//   },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <Error />,
  },
//   {
//     path: "/movies",
//     element: <Movie />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/tv-series",
//     element: <TvSeries />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/bookmarks",
//     element: <Bookmark />,
//     errorElement: <Error />,
//   },
]);