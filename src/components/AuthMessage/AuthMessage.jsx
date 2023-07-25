import PropTypes from "prop-types";

import { Link } from "../Link/Link";

import s from "./AuthMessage.module.css";

export const AuthMessage = ({ message, path, linkText }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.message}>{message}</p>
      <Link path={path}>{linkText}</Link>
    </div>
  );
};

AuthMessage.propTypes = {
  message: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
