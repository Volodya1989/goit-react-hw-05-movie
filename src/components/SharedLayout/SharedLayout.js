import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
