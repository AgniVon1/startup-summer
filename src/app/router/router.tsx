import {PATHS} from "./paths";
import {SearchPage} from "../../pages/searchJob/SearchPage";
import {createBrowserRouter,} from "react-router-dom";
import {AuthRedirect} from "../../pages/Routing";
import Favarites from "../../pages/favoritesVacancies/Favarites";
import Vacancy from "../../pages/vacancy/Vacancy";
import App from "../App";

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
            element: <Favarites/>,
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
