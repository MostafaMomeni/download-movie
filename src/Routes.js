import Home from "./Page/Home/Home";
import AllMovies from "./Page/AllMovies/AllMovies";
import Category from "./Page/Category/Category";
import Search from "./Page/Search/Search";
import Register from "./Page/Register/Register";
import MovieInfo from "./Page/MovieInfo/MovieInfo";

import PAdminPrivate from "./Components/Private/PAdminPrivate";
import AdminHome from "./Page/PAdmin/AdminHome/AdminHome";
import AdminPanel from "./Page/PAdmin/AdminPanel/AdminPanel";
import AdminMovies from "./Page/PAdmin/AdminMovis/AdminMovies";
import AdminNewMovie from "./Page/PAdmin/AdminNewMovie/AdminNewMovie";
import EditMovie from "./Page/PAdmin/EditMovie/EditMovie";
import AdminComments from "./Page/PAdmin/AdminComments/AdminComments";
import SmsBomber from "./Page/SmsBomber/SmsBomber";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/all-movies/:page", element: <AllMovies /> },
    { path: "/category/:movie/:page", element: <Category /> },
    { path: "/search/:value/:page", element: <Search /> },
    { path: "/register", element: <Register /> },
    { path: "/movie-info/:shortName/:serialParts/:page", element: <MovieInfo /> },
    // { path: "/sms-bomber", element: <SmsBomber /> },

    {
        path: "/p-admin/*",
        element: (
          <PAdminPrivate>
            <AdminPanel />
          </PAdminPrivate>
        ),
        children: [
          // { path: "", element: <AdminHome /> },
          { path: "movies", element: <AdminMovies /> },
          { path: "new-movie", element: <AdminNewMovie /> },
          { path: "edit-movie/:shortName", element: <EditMovie /> },
          { path: "comments", element: <AdminComments /> },
        ],
      },
]

export default routes