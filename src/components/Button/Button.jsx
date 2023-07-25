import PropTypes from "prop-types";

import s from "./Button.module.css";

export const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
