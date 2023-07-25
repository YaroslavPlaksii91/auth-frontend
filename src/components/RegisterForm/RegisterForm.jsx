import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { authOperations } from "../../redux/auth";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import s from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authOperations.register(data));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        label="Ім'я"
        type="text"
        name="firstName"
        placeholder="Ім'я"
        register={register("firstName", {
          required: "Це поле є обов'язковим",
          minLength: {
            value: 2,
            message: "Ім'я повинно містити принаймні 2 символи",
          },
          maxLength: {
            value: 30,
            message: "Ім'я повинно містити менше 30 символів",
          },
        })}
        errors={errors}
      />

      <Input
        label="Прізвище"
        type="text"
        name="lastName"
        placeholder="Прізвище"
        register={register("lastName", {
          required: "Це поле є обов'язковим",
          minLength: {
            value: 2,
            message: "Прізвище повинно містити принаймні 2 символи",
          },
          maxLength: {
            value: 30,
            message: "Прізвище повинно містити менше 30 символів",
          },
        })}
        errors={errors}
      />

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
        label="Номер телефону"
        type="text"
        name="phone"
        defaultValue="+380"
        register={register("phone", {
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^\+380\d{9}$/,
            message: "Не коректний формат телефону",
          },
        })}
        errors={errors}
      />

      <Input
        label="Пароль"
        type="password"
        name="password"
        placeholder="Введіть пароль"
        register={register("password", {
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^[a-zA-Z0-9]{6,30}$/,
            message: "Пароль має містити щонайменше 6 символів",
          },
        })}
        errors={errors}
      />

      <Input
        label="Підтвердження паролю"
        type="password"
        name="repeatPassword"
        placeholder="Підтвердіть пароль"
        register={register("repeatPassword", {
          required: "Це поле є обов'язковим",
          validate: (value) =>
            value === getValues("password") || "Паролі не співпадають",
        })}
        errors={errors}
      />

      <Button type="submit">Зареєструватись</Button>
    </form>
  );
};
