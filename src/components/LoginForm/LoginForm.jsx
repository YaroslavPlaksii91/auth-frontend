import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { authOperations } from "../../redux/auth";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import s from "./LoginForm.module.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authOperations.logIn(data));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="email@example.com"
        register={register("email", {
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Введіть дійсну електронну пошту",
          },
        })}
        errors={errors}
      />

      <Input
        label="Пароль"
        type="password"
        name="password"
        placeholder="Пароль"
        register={register("password", {
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^[a-zA-Z0-9]{6,30}$/,
            message: "Пароль має містити щонайменше 6 символів",
          },
        })}
        errors={errors}
      />

      <Button type="submit">Увійти</Button>
    </form>
  );
};
