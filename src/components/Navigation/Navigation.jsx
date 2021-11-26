import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies/">Movies</NavLink>
        </li>
        {/* <li><NavLink to='movies/:movieId'>Movie Details</NavLink></li> */}
      </ul>
    </>
  );
}

export default Navigation;
