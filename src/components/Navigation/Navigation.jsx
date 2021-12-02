import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

function Navigation() {
  return (
    <>
      <ul className={s.navigationList}>
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="movies/" className="link">
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
