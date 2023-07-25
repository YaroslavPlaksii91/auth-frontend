import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./Link.module.css";

export const Link = ({ path, children }) => {
  return (
    <NavLink to={path} className={s.link}>
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
