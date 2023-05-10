
import {Navigate, NavLink, Outlet, useLocation} from 'react-router-dom'
import {PATHS} from "../app/router/paths";
export const Routing = () => {
  const isInit = true // me
  const isLoggedIn  = true  // auth-Slice

  return isInit && isLoggedIn !== null ? <Layout /> : <MainPreloader />
};
export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={PATHS.VACANCIES}>VACANCIES </NavLink>
        <NavLink to={PATHS.FAVOURITES}>FAVOURITES </NavLink>
      </header>
        <Outlet />
    </>
  )
}
export const MainPreloader = () => {
  return (
   <>
     Loading...
   </>
  )
}
export const AuthRedirect = () => {
  const isLoggedIn  = true
  const location = useLocation()

  if (!isLoggedIn) return <Navigate to={"/login"} state={{ from: location }} />

  return <Outlet />
}
