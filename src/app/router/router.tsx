import {PATHS} from "./paths";
import {SearchPage} from "../../pages/searchJob/SearchPage";
import {createBrowserRouter,} from "react-router-dom";
import {AuthRedirect} from "../../pages/Routing";
import {Favorites} from "../../pages/favoritesVacancies/Favarites";

import App from "../App";
import {Vacancy} from "../../pages/vacancy/Vacancy";

export const router = createBrowserRouter([
  {
    path: PATHS.VACANCIES,
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        path: PATHS.VACANCIES,
        element: <AuthRedirect />,
        children: [
          {
            index: true,
            element: <SearchPage />,
          },
          {
            path: PATHS.FAVOURITES,
            element: <Favorites/>,
          },
          {
            path: PATHS.VACANCY,
            element: <Vacancy />,
          },
        ],
      },
      {
        path: "login",
        element: <div>login</div>,
        children: [
          {
            index: true,
            element: <div>login</div>,
          },
          {
            path: "registration",
            element: <div>reg</div>,
          },
        ],
      },
    ],
  },
]);
