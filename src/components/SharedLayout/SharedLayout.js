import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledLink } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
