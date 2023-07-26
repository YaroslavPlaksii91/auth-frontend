import PropTypes from "prop-types";

import s from "./Input.module.css";

export const Input = ({
  label,
  type,
  name,
  placeholder = "",
  defaultValue = "",
  register,
  errors,
}) => {
  return (
    <div className={s.inputWrap}>
      <label htmlFor={name} className={s.label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`${errors[name] ? s.inputError : s.input} `}
        {...register}
      />
      {errors[name] && (
        <span className={s.errorMessage}>{errors[name]?.message}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  register: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
